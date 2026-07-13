let{test}=require('@playwright/test');
const { asyncWrapProviders } = require('node:async_hooks');
test('FindLocator',async({page})=>{
await page.goto("https://adactinhotelapp.com/");
let username=await page.locator("//input[@id='username']");
// await username.fill("pavithra");
// await page.waitForTimeout(1000);

// let password=await page.locator("//input[@type='password']");
// await password.fill("Saikutty@123");
// await page.waitForTimeout(1000);

// let forgetpassword=await page.locator("//a[text()='Forgot Password?']");
// await forgetpassword.click("Kuttysai@123")
// await page.waitForTimeout(1000);
// let newpage=await page.locator("//a[text()='Go back to Login page']")
// await newpage.click();
let Register=await page.locator("//a[text()='New User Register Here']");
await Register.click()

let newusername=await page.locator("input[name='username']");
await newusername.fill("jhonytest123");
await page.waitForTimeout(3000);
let newpassword=await page.locator("input[name='password']");
await newpassword.fill("Rithukutty@123");
let confirmpassword=await page.locator('input[name="re_password"]');
await confirmpassword.fill("Rithukutty@123");
let fullname=await page.locator("input[name='full_name']");
await fullname.fill("jhony test")
let email=await page.locator('//input[@name="email_add"]');
await email.fill("rithukutty1010@gmail.com")
await page.waitForTimeout(10000);
let agree=await page.locator("//input[@type='checkbox']")
await agree.click();
//await page.waitForTimeout(20000);
let submit=await page.locator('//input[@type="submit"]');
await submit.click();

await page.waitForTimeout(5000);

})