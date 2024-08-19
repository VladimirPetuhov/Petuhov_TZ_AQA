const { test, expect } = require('@playwright/test');

  test('[POSITIVE] valid login and password 1', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill('aqa');
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('AQA123');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByText('Вы авторизовались')).toBeVisible();
  });

  test('[POSITIVE] valid login and password 2', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill('test');
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('test123');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByText('Вы авторизовались')).toBeVisible();
  });

  test('[POSITIVE] valid login and password 3', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill('admin');
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('admin');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByText('Вы авторизовались')).toBeVisible();
  });

  test('[POSITIVE] valid login in uppercase', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill('TEST');
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('test123');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByText('Вы авторизовались')).toBeVisible();
  });

  test('[NEGATIVE] login error', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill('324');
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('admin');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByText('User not found')).toBeVisible();
  });

  test('[NEGATIVE] password error', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill('admin');
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('123');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByText('Incorrect password')).toBeVisible();
  });

  test('[NEGATIVE] empty login', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    await page.getByPlaceholder('Username').fill('');
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('admin');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByText('User not found')).toBeVisible();
  });

  test('[NEGATIVE] empty password', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill('admin');
    await page.getByPlaceholder('Password').fill('');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByText('Incorrect password')).toBeVisible();
  });

  test('[NEGATIVE] empty login + password', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    await page.getByPlaceholder('Username').fill('');
    await page.getByPlaceholder('Password').fill('');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByText('User not found')).toBeVisible();
  });

  test('[NEGATIVE] valid password in uppercase', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill('test');
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('TEST123');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByText('Incorrect password')).toBeVisible();
  });

