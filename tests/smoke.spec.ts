import { expect, test } from "@playwright/test";

test.describe("smoke CBRB", () => {
  test("home carga y muestra hero + CTA SAE", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Colegio Bicentenario/);
    await expect(page.getByRole("heading", { level: 1 })).toContainText("República del Brasil");
    await expect(page.getByRole("link", { name: /Postula por SAE/i }).first()).toBeVisible();
    await expect(page.getByAltText("Escudo CBRB")).toBeVisible();
  });

  test("equipo directivo sin placeholders", async ({ page }) => {
    await page.goto("/nosotros");
    await expect(page.getByText("Dino Fauricio Olivieri Díaz")).toBeVisible();
    await expect(page.getByText("Rebeca Pinto Espinoza")).toBeVisible();
    await expect(page.getByText("Alejandro Olave Parra")).toBeVisible();
    await expect(page.getByText("María Lourdes Alid Lagos")).toBeVisible();
    await expect(page.getByText("César Pizarro Hidalgo")).toBeVisible();
    await expect(page.getByText(/Por definir/)).toHaveCount(0);
  });

  test("transparencia abre visor PDF", async ({ page }) => {
    await page.goto("/transparencia");
    await expect(page.getByText("Proyecto Educativo Institucional (PEI)")).toBeVisible();
    await page.getByRole("button", { name: "Leer" }).first().click();
    const dialog = page.getByRole("dialog");
    await expect(dialog).toBeVisible();
    await expect(page.locator("canvas").first()).toBeVisible({ timeout: 15_000 });
    await expect(dialog.getByRole("button", { name: "Cerrar" })).toBeVisible();
  });

  test("movil: CTA SAE fijado y sin scroll horizontal", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");
    await expect(page.getByRole("link", { name: /Postula por SAE/i }).last()).toBeVisible();
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
    expect(overflow).toBe(false);
  });
});
