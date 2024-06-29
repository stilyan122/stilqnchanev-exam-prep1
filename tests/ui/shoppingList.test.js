const { test, expect } = require('@playwright/test');

test('Check shopping list page', async ({ page }) => {
    await page.goto('http://localhost:8082/shopping-list');
    const list = await page.$('dl');
    expect(list).toBeTruthy();
  });
  