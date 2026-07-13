let {test}=require("@playwright/test")
test.use({
headless:false,
browserName:"chromium"
})
test('Alert3',async({page})=>{
await page.goto("https://testpages.eviltester.com/pages/basics/alerts-javascript/")
page.on('dialog',async dialog=>{
    await dialog.accept("Hello Playwright")
})
let alert=await page.getByText("Show alert box")
await alert.click()


let confirm=await page.getByText("Show confirm box")
await confirm.click()
await page.waitForTimeout(3000)

let prompt=await page.getByText("Show prompt box")
await prompt.click();
await page.waitForTimeout(3000)



})