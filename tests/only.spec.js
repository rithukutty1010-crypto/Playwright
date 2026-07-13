const { test } = require('@playwright/test');

test.only('only test', async ({ page }) => {
  console.log("Only this test should run");
});