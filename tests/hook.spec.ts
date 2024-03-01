import {test, expect} from "@playwright/test";



test.beforeEach('run before each test',async({page})=>{
    console.log("running before each test");
    await page.goto("https://www.facebook.com/");
})

test.beforeAll('run before all',async({page})=>{
    await page.goto('https://www.youtube.com/');
})

test("use of hook",async({page})=>{
    await page.getByPlaceholder('Email address or phone number').click();
    await page.getByPlaceholder('Email address or phone number').fill("tanvir9832@gmail.com");
    await page.getByPlaceholder('password').click();
    await page.getByPlaceholder('password').fill('sdfsdgsgdwqey');
    await page.getByRole('button', {name : "Log in", exact : true}).click();
});

test("check again",async({page})=>{
    await page.goto('https://dadubari.com');
})