let {test}=require('@playwright/test')
test('LocatorElement',async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/');
    //To find out the Element in CSS
let name=await page.locator('id=navbar');
//To Perform some action
await name.fill('Pavithra')
await page.waitForTimeout(5000);

let email=await page.locator(input[ id='email']);
await email.fill("pavithra_b2p@yahoo.com")

//xpath

let mobile=await page.locator("//input[@placeholder='Enter Phone']");
await mobile.fill("8838432039")
let gender=await page.locator("//label[text()='Gender:']");


await gender.fill("Female")
let days=await page.locator(" //label[text()='Monday']");
await gender.fill("Moday")
let sorted=await page.locator("//option[@value='dog']");
await page.fill("cat")

let datepicker=await page.locator("//input[@placeholder='Start Date']");
await page.fill("12.12.26")




})