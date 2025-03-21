import { test, expect } from '@playwright/test';

test('Login and add two items to cart', async ({ page }) => {
  // Navigate to Swag Labs login page
  await page.goto('https://www.saucedemo.com/');

  // Perform login
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // Validate successful login
  await expect(page.locator('.title')).toHaveText('Products');

  // Add first item to cart
  await page.click('button[data-test="add-to-cart-sauce-labs-backpack"]');

  // Add second item to cart
  await page.click('button[data-test="add-to-cart-sauce-labs-bike-light"]');

  // Go to cart page
  await page.click('.shopping_cart_link');

  // Validate items in the cart
  const cartItems = await page.locator('.cart_item').count();
  expect(cartItems).toBe(2);
});
