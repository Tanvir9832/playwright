import {test, expect } from "@playwright/test";

test('Locators',async({page})=>{
    await page.goto('https://www.youtube.com/');
})