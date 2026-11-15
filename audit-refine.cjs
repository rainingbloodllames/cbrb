// Capturas tolerantes tras rebuild
const { chromium } = require('playwright-core');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
  for (const [r, name] of [['/', 'home'], ['/transparencia', 'transparencia']]) {
    await page.goto('http://localhost:3001' + r, { waitUntil: 'domcontentloaded', timeout: 30000 });
    await page.waitForTimeout(2500);
    await page.screenshot({ path: `screenshots/refine-${name}.png` });
    console.log('shot', r);
  }
  await browser.close();
})();
