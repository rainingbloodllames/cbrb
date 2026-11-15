// Capturas frescas prod sin caché (nuevo contexto)
const { chromium } = require('playwright-core');

(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 800 }, cache: 'disabled' });
  const page = await ctx.newPage();
  await page.goto('https://cbrb-nine.vercel.app/', { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(800);
  await page.screenshot({ path: 'screenshots/fresh-prod-hero.png' });
  const hero = page.locator('section').first();
  await hero.screenshot({ path: 'screenshots/fresh-prod-hero-crop.png' });
  await page.goto('https://cbrb-nine.vercel.app/transparencia', { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(800);
  await page.screenshot({ path: 'screenshots/fresh-prod-transparencia.png' });
  const style = await page.evaluate(() => {
    const leer = document.querySelector('button');
    return window.location.href;
  });
  console.log('URL', style);
  await browser.close();
})();
