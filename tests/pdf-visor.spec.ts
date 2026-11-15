import { expect, test } from "@playwright/test";

test("visor premium: giro, busqueda, continuo y fullscreen", async ({ page }) => {
  await page.goto("/transparencia");
  await page.getByRole("button", { name: "Leer" }).first().click();
  const dialog = page.getByRole("dialog");
  await expect(page.locator("canvas").first()).toBeVisible({ timeout: 15_000 });

  const pageInput = dialog.getByLabel("Número de página");
  await expect(pageInput).toHaveValue("1");

  // Giro direccional: siguiente pagina anima y confirma
  await dialog.getByRole("button", { name: "Página siguiente" }).click();
  await expect(pageInput).toHaveValue("2", { timeout: 5_000 });
  await page.waitForTimeout(700);
  await dialog.getByRole("button", { name: "Página anterior" }).click();
  await expect(pageInput).toHaveValue("1", { timeout: 5_000 });

  // Teclado: flecha derecha
  await page.keyboard.press("ArrowRight");
  await expect(pageInput).toHaveValue("2", { timeout: 5_000 });

  // Busqueda: Ctrl+F abre, typing, resultados con chips de pagina y resaltado
  await page.keyboard.press("Control+f");
  const search = dialog.getByRole("searchbox", { name: "Buscar en el documento" });
  await expect(search).toBeVisible();
  await search.fill("de");
  await expect(dialog.locator("ul[aria-label='Resultados de búsqueda']")).toBeVisible({ timeout: 20_000 });
  const marks = await dialog.locator("mark").count();
  expect(marks).toBeGreaterThan(0);

  // Enter salta a una coincidencia
  await search.press("Enter");
  await page.waitForTimeout(600);

  // Ir a pagina por input
  await pageInput.fill("3");
  await pageInput.press("Enter");
  await expect(pageInput).toHaveValue("3", { timeout: 5_000 });

  // Slider de progreso
  const slider = dialog.getByLabel("Progreso de lectura");
  await slider.fill("1");
  await expect(pageInput).toHaveValue("1", { timeout: 5_000 });

  // Vista continua: aparecen placeholders paginas y al hacer scroll canvases extra
  await dialog.getByRole("button", { name: "Vista continua" }).click();
  await expect(page.locator("#pdf-page-1")).toBeVisible();
  await page.waitForTimeout(1200);

  // Volver a vista libro
  await dialog.getByRole("button", { name: /Vista continua/ }).click();
  await expect(page.locator("canvas").first()).toBeVisible();

  // Pantalla completa
  await dialog.getByRole("button", { name: "Pantalla completa" }).click();
  await expect
    .poll(async () => page.evaluate(() => !!document.fullscreenElement))
    .toBe(true);
  await dialog.getByRole("button", { name: "Salir de pantalla completa" }).click();
  await expect
    .poll(async () => page.evaluate(() => !!document.fullscreenElement))
    .toBe(false);

  // Esc cierra la busqueda primero, el segundo cierra el dialogo
  await page.keyboard.press("Escape");
  await expect(dialog.getByRole("searchbox", { name: "Buscar en el documento" })).toHaveCount(0);
  await page.keyboard.press("Escape");
  await expect(dialog).toHaveCount(0);
});
