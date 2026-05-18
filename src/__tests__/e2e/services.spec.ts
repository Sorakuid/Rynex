import { expect, test } from "@playwright/test";

test.describe("Services Page", () => {
  test("should display services page with packages", async ({ page }) => {
    await page.goto("/en/services");

    // Check hero section
    await expect(page.locator("h1")).toContainText("Custom Website");

    // Check packages
    await expect(page.locator("text=Basic")).toBeVisible();
    await expect(page.locator("text=Pro")).toBeVisible();
    await expect(page.locator("text=Enterprise")).toBeVisible();
  });

  test("should navigate to order page", async ({ page }) => {
    await page.goto("/en/services");

    // Click on order button
    await page.click("text=Most Popular");

    // Should navigate to services/order
    await expect(page).toHaveURL(/\/services\/order/);
  });
});

test.describe("Services Order Page", () => {
  test("should display order form", async ({ page }) => {
    await page.goto("/en/services/order");

    // Check form elements
    await expect(page.locator("input[name='name']")).toBeVisible();
    await expect(page.locator("input[name='email']")).toBeVisible();
    await expect(page.locator("textarea[name='description']")).toBeVisible();
  });

  test("should submit order form", async ({ page }) => {
    await page.goto("/en/services/order");

    // Fill form
    await page.fill("input[name='name']", "John Doe");
    await page.fill("input[name='email']", "john@example.com");
    await page.selectOption("select[name='budget']", "pro");
    await page.fill(
      "textarea[name='description']",
      "I need a website for my startup",
    );

    // Submit
    await page.click("button[type='submit']");

    // Should show success message
    await expect(page.locator("text=Request Submitted!")).toBeVisible();
  });
});
