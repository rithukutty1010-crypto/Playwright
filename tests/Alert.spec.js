let{test}=require("@playwright/test")
test.use({
headless:false,
browserName:"chromium"
})
test('Alert',async({page})=>{
await page.goto("https://letcode.in/alert")
page.on('dialog',async dialog=>{
    await dialog.accept("Hello");
})
// alert
let simple=await page.getByText("Simple Alert")
await simple.click()
//confirm
let confirm=await page.getByText("Confirm Alert")
await confirm.click();
//await page.waitForTimeout(3000)
//prompt
let prmpt=await page.getByText("Prompt Alert")
await prmpt.click()
await page.waitForTimeout(3000)
//contact
let contact=await page.locator('//button[text()="Prompt Alert"]')
await contact.click()
//await page.waitForTimeout(3000)
})





