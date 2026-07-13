let{test}=require("@playwright/test")
test.use({
headless:false,
browserName:"chromium"
})
test("screenshot3",async({page})=>{
await page.goto("https://www.amazon.in/")
await page.screenshot({path:"amazonhomepage.png"})
await page.waitForTimeout(3000)
let icon=await page.getByText("Update location")
await icon.screenshot({path:"Update location.png"})
await page.waitForTimeout(3000)
await page.screenshot({path:"amazonfullpage.png"})
await page.waitForTimeout(3000)
})