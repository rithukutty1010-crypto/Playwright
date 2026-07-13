let{test,chromium}=require("@playwright/test")
test.use({
headless:false,
browserName:"chromium"
})
test("windowhandling3",async()=> {
let browser=await chromium.launch();
let context=await browser.newContext();
let page=await context.newPage();
await page.goto("https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_win_open");
let home = context.waitForEvent('page')
let frame=await page.frame('//iframe[@name="iframeResult"]')
let start=await page.getByText("Try it")
await start.first().click()
});