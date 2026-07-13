let{test}=require("@playwright/test")
test.use({
headless:false,
browserName:"chromium"
})
test("Methods2",async({page})=>{
await page.goto("https://www.amazon.in/")
let Search=await page.getByPlaceholder("Search Amazon.in")
await Search.type("facewash")
//await page.waitForTimeout(3000)
await Search.clear()
//await page.waitForTimeout(3000)
await Search.fill("Kurta for women")
let go=await page.locator("#nav-search-submit-button")
await go.click()
await page.goto("https://www.snapdeal.com/")
let enter=await page.locator("#search-box-input")
await enter.fill("Samsung mobile")
//await page.waitForTimeout(3000)
let edit=await page.locator("#search-box-input")
await edit.isEditable();
await page.waitForTimeout(3000)

})