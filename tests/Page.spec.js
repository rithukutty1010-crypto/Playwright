let {test}=require('@playwright/test');
const { asyncWrapProviders } = require('node:async_hooks');
test('Page',async({page})=>{
await page.goto("https://automationexercise.com/login")
//await page.waitForTimeout(2000);
let username=await page.getByPlaceholder("Name")
await username.fill("pavithra");
//await page.waitForTimeout(3000);

let email=await page.locator('//input[@data-qa="signup-email"]');
await email.fill(`rithukutty1010${Date.now()}@gmail.com`)

let signup=await page.getByRole('button',{name :"signup"})
await signup.click();
await page.waitForTimeout(6000);
 let title=await page.locator("//label[@for='id_gender2']")
 await title.click();

 let password=await page.locator('//input[@data-qa="password"]')
 await password.fill("Saikutty@123");
 

 let days=await page.locator('//select[@data-qa="days"]');
 await days.selectOption("16")
 let month=await page.locator('//select[@data-qa="months"]')
 await month.selectOption("9")
 let year=await page.locator('//select[@data-qa="years"]');
 await year.selectOption("1991")
 //await page.waitForTimeout(3000);
 let sign=await page.getByLabel("Sign up for our newsletter!");
 await sign.click();
 await page.waitForTimeout(3000);
 let firstname=await page.locator("#first_name")
 await firstname.fill("pattu");
 let lastname=await page.locator("input[name='last_name']")
 await lastname.fill("prabu")
 //await page.waitForTimeout(3000);
let companyname=await page.locator("//input[@data-qa='company']")
await companyname.fill("samsung")
 let address=await page.locator("//input[@data-qa='address']")
 await address.fill("No-21,Electronic city 3rd phase,Bangalore")
  await page.waitForTimeout(3000);
  let country=await page.locator("#country")
  await country.selectOption("India")
  
   let state=await page.locator("#state")
   await state.fill("Tamil Nadu");
   await page.waitForTimeout(3000)

   let distric=await page.locator("#city")
   await distric.fill("Chennai")
   //await page.waitForTimeout(3000)

   let zipcode=await page.locator("#zipcode")
   await zipcode.fill("600094")
    let mobile=await page.locator("#mobile_number")
 await mobile.fill("8838432039")

  let create=await page.getByRole('button',{name:'Create Account'})
  await create.click()
   await page.waitForTimeout(5000)
})