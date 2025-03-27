import { test, expect } from '@playwright/test';

test('If the user provides a user name with a min. length of 3 characters and a valid email address, they should get a "User form was successfully submitted!" alert', async ({
  page,
}) => {
  page.once('dialog', async (dialog) => {
    expect(dialog.message()).toBe('User form was successfully submitted!');
    await dialog.dismiss();
  });
  await page.goto('http://localhost:5173/');
  await page.getByPlaceholder('Enter username').fill('Jane');
  await page.getByPlaceholder('Enter email').fill('jane@example.com');
  await page.getByRole('button', { name: 'Submit' }).click();
});

test('If the user provides a user name with more than 3 characters but an invalid email address, they should get a "Invalid input. Your username must be longer than 3 characters and your email must be valid." alert', async ({
  page,
}) => {
  page.once('dialog', async (dialog) => {
    expect(dialog.message()).toBe(
      'Invalid input. Your username must be longer than 3 characters and your email must be valid.'
    );
    await dialog.dismiss();
  });
  await page.goto('http://localhost:5173/');
  await page.getByPlaceholder('Enter username').fill('Jane');
  await page.getByPlaceholder('Enter email').fill('jane@example');
  await page.getByRole('button', { name: 'Submit' }).click();
});

test('If the user provides a user name with a less than 3 characters and a valid email address, they should get a "Invalid input. Your username must be longer than 3 characters and your email must be valid." alert', async ({
  page,
}) => {
  page.once('dialog', async (dialog) => {
    expect(dialog.message()).toBe(
      'Invalid input. Your username must be longer than 3 characters and your email must be valid.'
    );
    await dialog.dismiss();
  });
  await page.goto('http://localhost:5173/');
  await page.getByPlaceholder('Enter username').fill('Ja');
  await page.getByPlaceholder('Enter email').fill('jane@example.com');
  await page.getByRole('button', { name: 'Submit' }).click();
});
