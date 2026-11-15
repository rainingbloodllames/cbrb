// Auditoría de contraste WCAG (aprox. luminancia relativa)
const { chromium } = require('playwright-core');

function lum(r, g, b) {
  const f = (c) => { c /= 255; return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4); };
  return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
}
function parseRGB(s) {
  const m = s.match(/rgba?\(([^)]+)\)/);
  if (!m) return null;
  const parts = m[1].split(',').map(Number);
  return { r: parts[0], g: parts[1], b: parts[2], a: parts[3] ?? 1 };
}
function ratio(fg, bg) {
  const L1 = lum(fg.r, fg.g, fg.b), L2 = lum(bg.r, bg.g, bg.b);
  const [hi, lo] = L1 >= L2 ? [L1, L2] : [L2, L1];
  return (hi + 0.05) / (lo + 0.05);
}

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
  const routes = ['/', '/nosotros', '/admision', '/comunidad', '/transparencia', '/contacto'];
  for (const r of routes) {
    await page.goto('http://localhost:3001' + r, { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(400);
    const failing = await page.evaluate(() => {
      const els = [...document.querySelectorAll('p, span, a, button, li, h1, h2, h3')].filter(e => {
        const t = (e.innerText || '').trim();
        return t && t.length > 1 && e.getBoundingClientRect().height > 0;
      }).slice(0, 400);
      return els.map(e => {
        const cs = getComputedStyle(e);
        const fs = parseFloat(cs.fontSize);
        return { text: (e.innerText || '').slice(0, 70), fg: cs.color, bg: cs.backgroundColor, fs, fw: cs.fontWeight };
      });
    });
    // bg real: buscar ancestor con background no transparente (simplificado: body bg)
    const bodyBg = await page.evaluate(() => getComputedStyle(document.body).backgroundColor);
    console.log('\n=== ' + r + ' bodyBg=' + bodyBg);
    let shown = 0;
    for (const e of failing) {
      const fg = parseRGB(e.fg); const bg = parseRGB(e.bg);
      const bgUse = bg && bg.a > 0.3 ? bg : parseRGB(bodyBg);
      if (!fg || !bgUse) continue;
      const cr = ratio(fg, bgUse);
      const large = e.fs >= 24 || (e.fs >= 18.5 && Number(e.fw) >= 700);
      const need = large ? 3 : 4.5;
      if (cr < need && shown < 8) {
        console.log(` - "${e.text}" fg=${e.fg} bg=${e.bg === 'rgba(0, 0, 0, 0)' ? bodyBg : e.bg} fs=${e.fs}px CR=${cr.toFixed(2)} need=${need}`);
        shown++;
      }
    }
    if (!shown) console.log(' - sin fallas bajo este muestreo');
  }
  await browser.close();
})();
