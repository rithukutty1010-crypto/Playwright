let{test}=require("@playwright/test")
test.use({
headless:false,
browserName:"chromium"
})
test("Alertnew1",async({page})=>{
await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
page.on("dialog",async dialog=>{
await dialog.accept("pavitha onboard")

})
let alert=await page.getByText("Click for JS Alert")
await alert.click();
let confirm=await page.getByText("Click for JS Confirm")
await confirm.click()
let prompt=await page.getByText("Click for JS Prompt")
await prompt.click(); 
await page.waitForTimeout(3000)
})