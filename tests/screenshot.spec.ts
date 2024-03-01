import {test} from "@playwright/test";


test('Take screenshot',async({page})=>{
    await page.goto("https://www.youtube.com/watch?v=GSGc4iAAbLk");
    await page.locator("#player").screenshot({path : "./element.png"});

    await page.screenshot({path : "./page.png" , fullPage : true});
})