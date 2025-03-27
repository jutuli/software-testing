import { test, expect } from '@playwright/test';

test('User can subscribe to the newsletter', async ({ page }) => {
  await page.goto('http://localhost:5173');
  await page.getByPlaceholder('Your email').fill('john.doe@acme.inc');
  await page
    .getByRole('checkbox', { name: 'I agree to receive the newsletter' })
    .check();
  await page.getByRole('button', { name: 'Subscribe' }).click();
  await expect(page.getByTestId('subscription-confirmation')).toHaveText(
    'Thank you! You are now subscribed.'
  );
});

test("If user doesn't agree to the newsletter, the subscription confirmation does not show up", async ({
  page,
}) => {
  await page.goto('http://localhost:5173');
  await page.getByPlaceholder('Your email').fill('john.doe@acme.inc');
  await page.getByRole('button', { name: 'Subscribe' }).click();
  await expect(page.getByTestId('subscription-confirmation')).not.toBeVisible();
});

test("If user doesn't provide an email, the subscription confirmation does not show up", async ({
  page,
}) => {
  await page.goto('http://localhost:5173');
  await page
    .getByRole('checkbox', { name: 'I agree to receive the newsletter' })
    .check();
  await page.getByRole('button', { name: 'Subscribe' }).click();
  await expect(page.getByTestId('subscription-confirmation')).not.toBeVisible();
});
