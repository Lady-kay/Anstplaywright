import { test, expect } from '@playwright/test';

test('Login and add two items to cart', async ({ page }) => {
 
  await page.goto('https://www.saucedemo.com/');

 
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  await expect(page.locator('.title')).toHaveText('Products');
  
  await page.click('button[data-test="add-to-cart-sauce-labs-backpack"]');

  await page.click('button[data-test="add-to-cart-sauce-labs-bike-light"]');

  await page.click('.shopping_cart_link');

  const cartItems = await page.locator('.cart_item').count();
  expect(cartItems).toBe(2);
});
