
import { expect } from '@playwright/test';
import {createBdd} from 'playwright-bdd';
const {Given,When,Then}=createBdd();

Given('I Navigate to {string}', async ({page}, url: string) => {
  // Step: Given I Navigate to 'https://www.saucedemo.com/'
  // From: features\demo.feature:3:9
  await page.goto(url);
});

When('You Enter username {string}', async ({page}, username: string) => {
  // Step: When You Enter 'username'
  // From: features\demo.feature:4:9
  await page.getByRole('textbox',{name:'Username'}).fill(username);
});

When('You Enter password {string}', async ({page}, password: string) => {
  // Step: And You Enter password 'secret_sauce'
  // From: features\demo.feature:5:9
  await page.getByRole('textbox',{name:'Password'}).fill(password);
});

When('You Click on Login Button', async ({page}) => {
  // Step: And You Click on 'Login' Button
  // From: features\demo.feature:6:9
 await page.locator('[data-test="login-button"]').click();

});

Then('Verify url should contain {string}', async ({page},urlcont:string) => {
  // Step: Then Verify url should contain 'inventory.html'
  // From: features\demo.feature:7:9
  expect(page).toHaveURL(/urlcont/)
});
