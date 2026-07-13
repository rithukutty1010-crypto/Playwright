let{test}=require("@playwright/test")
test.use({
headless:false,
browserName:"chromium"
})
test("Dropdown4",async({page})=>{
await page.goto("https://demoqa.com/select-menu")
//single dropdown
let visible=await page.
})