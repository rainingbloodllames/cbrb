// Audit con Playwright: screenshots + errores console — CBRB
// Ejecutar: npx playwright test audit.spec.js --config playwright.audit.config.js  (o node puro abajo)
const { chromium } = require('playwright-core');

(async () => {
  const browser = await chromium.launch({ executablePath: undefined });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  const errors = [];
  page.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });
  page.on('pageerror', e => errors.push('PAGEERROR: ' + e.message));

  const routes = ['/', '/nosotros', '/admision', '/comunidad', '/transparencia', '/contacto'];
  const fs = require('fs');
  fs.mkdirSync('screenshots', { recursive: true });

  for (const r of routes) {
    const name = r === '/' ? 'home' : r.slice(1);
    await page.goto('http://localhost:3001' + r, { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(600);
    await page.screenshot({ path: `screenshots/${name}-desktop.png` });
    await page.screenshot({ path: `screenshots/${name}-desktop-full.png`, fullPage: true });
    console.log('OK', r, await page.title());
  }
  // Mobile
  await page.setViewportSize({ width: 390, height: 844 });
  for (const r of routes) {
    const name = r === '/' ? 'home' : r.slice(1);
    await page.goto('http://localhost:3001' + r, { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(500);
    await page.screenshot({ path: `screenshots/${name}-mobile.png` });
    console.log('OK mobile', r);
  }
  // Lighthouse-ish checks
  const checks = await page.evaluate(() => ({
    h1: document.querySelector('h1')?.innerText?.slice(0, 120),
    widths: document.documentElement.scrollWidth,
    overflow: document.documentElement.scrollWidth > window.innerWidth,
  }));
  console.log('CHECKS', JSON.stringify(checks));
  console.log('CONSOLE ERRORS', JSON.stringify(errors, null, 2));
  await browser.close();
})();
