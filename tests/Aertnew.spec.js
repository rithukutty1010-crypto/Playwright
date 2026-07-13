let{test}=require("@playwright/test")
test.use({
headless:false,
browserName:"chromium"
})
test("Alertnew",async({page})=>{
await page.goto("https://demoqa.com/alerts")
page.on("dialog",async dialog=>{
await dialog.accept("hello")
})
let alert=await page.locator("#alertButton")
await alert.click()
let confirm=await page.locator("#confirmButton")
await confirm.click()
let prompt=await page.locator("#promtButton")
await prompt.click()
await page.waitForTimeout(3000)
})