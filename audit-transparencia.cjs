// Verificar visor Transparencia con Playwright
const { chromium } = require('playwright-core');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
  const errors = [];
  page.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });
  page.on('pageerror', e => errors.push('PAGEERROR: ' + e.message));

  await page.goto('http://localhost:3001/transparencia', { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'screenshots/transparencia-list.png' });
  console.log('lista OK');

  // Click primer "Leer"
  await page.getByRole('button', { name: 'Leer' }).first().click();
  await page.waitForTimeout(3000);
  const dialog = page.getByRole('dialog');
  console.log('dialog visible:', await dialog.isVisible().catch(() => false));
  await page.screenshot({ path: 'screenshots/transparencia-viewer.png' });
  const canvas = await page.locator('canvas').count();
  console.log('canvas count:', canvas);
  console.log('ERRORS', JSON.stringify(errors, null, 2));
  await browser.close();
})();
