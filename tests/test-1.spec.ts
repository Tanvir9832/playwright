import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://mdtanviralamanik.vercel.app/');
  await page.getByText('This is Md Tanvir Alam Anik.').click();
  await expect(page.locator('#root')).toContainText('This is Md Tanvir Alam Anik. I am a Full Stack Web Developer, specialize in both Front-end and backend technologies.For Front-end I am comfortable with JavaScript, React JS, HTML5, CSS3, Tailwind, bootstrap, MUI, Redux-toolkit etc . For Backend I work with technologies like Node JS, Express JS, MongoDB , Mongoose etc . I have always been someone who has both a creative and a logical side.');
  await expect(page.getByText('I am an adept problem solver')).toBeVisible();
  await page.getByPlaceholder('Your name').click();
  await page.getByPlaceholder('Your email').click();
  await page.getByPlaceholder('Your email').fill('Tanvir9832@gmail.com');
  await page.getByPlaceholder('Your email').press('Enter');
});

test('validate title', async ({ page }) => {
  await page.goto('https://www.youtube.com/');
  await page.getByPlaceholder('Search').click();
  await page.getByPlaceholder('Search').fill("React tutorial");
  await expect(page.getByRole('button', { name: 'Search', exact: true })).toBeEnabled();
  await page.getByRole('button', { name: 'Search', exact: true }).click();
  await expect(page.getByRole('link', { name: 'Announcement: Agood news for' })).toBeVisible();
  await page.getByRole('link', { name: 'Announcement: Agood news for' }).click();
  await expect(page).toHaveTitle('Announcement: Agood news for Full-stack web developer (React.js) - YouTube');
  await page.goBack();
});

