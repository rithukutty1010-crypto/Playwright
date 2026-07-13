let{test}=require("@playwright/test")
test.use({
    headless:false,
    browserName:"chromium"

})
test('framenew',async({page})=>{
await page.goto("https://letcode.in/frame")
let outerframe=await page.frame
("firstFr")
let firstname=await outerframe.getByPlaceholder("Enter name")
await firstname.fill("pavithra")
let lastname=await outerframe.locator('//input[@name="lname"]')
await lastname.fill("prabu")
let innerframe=await outerframe .frameLocator("//iframe[@src='innerframe']")
let email=await innerframe.locator('//input[@name="email"]')
await email.fill('pavithra12@gmail.com')
await page.waitForTimeout(3000)

})