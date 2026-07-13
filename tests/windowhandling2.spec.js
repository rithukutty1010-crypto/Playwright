let{test,chromium}=require("@playwright/test")
test.use({
headless:false,
browserName:"chromium"
})
test("windowhandling2",async()=>{
let browser=await chromium.launch();
let context=await browser.newContext();
let page=await context.newPage();
await page.goto("https://demo.automationtesting.in/Windows.html")
let event = context.waitForEvent("page");
let press=await page.getByText("click").first()
await press.click()
await page.waitForTimeout(3000)
let page2= await event;
let download=await page2.getByText('Downloads').first()
await download.click()
//await page2.screenshot({path:"selenium.png",fullPage:true})
await page.waitForTimeout(3000)
let print=await download.textContent()
console.log("text");


})