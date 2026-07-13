let{test}=require("@playwright/test")
test.use({
headless:false,
browserName:'chromium'
})
test('screenshot',async({page})=>{
await page.goto("https://www.snapdeal.com/")
await page.screenshot({path:"snapdealhomepage.png"})
await page.waitForTimeout(3000)
let download=await page.getByText("Download App")
await download.screenshot({path:'downloadapp.png'});
await page.waitForTimeout(3000)
await page.screenshot({path:'snapdealfullpage.png',fullPage:true});
await page.waitForTimeout(3000)





})