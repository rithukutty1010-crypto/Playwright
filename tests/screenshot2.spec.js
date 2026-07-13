let{test}=require("@playwright/test")
test.use({
headless:false,
browserName:"chromium"
})
test('screenshot2',async({page})=>{
await page.goto("https://www.nykaa.com/")
await page.screenshot({path:"nykaahomepage.png"})
let easyreturn=await page.locator("//img[@alt='Easy Returns']")
await easyreturn.screenshot({path:'easyreturn.png'})
//await page.waitForTimeout(3000)
await page.screenshot({path:"nykaafullpage.png",fullpage:true});
await page.waitForTimeout(3000)



})    