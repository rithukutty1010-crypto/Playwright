let{test,chromium}=require('@playwright/test')
test('windowhandling4',async()=>{
let browser=await chromium.launch();
let context=await browser.newContext();
let page=await context.newPage();
await page.goto("https://the-internet.herokuapp.com/windows")
let event=context.waitForEvent('page')
let frame=page.getByText("Click Here")
await frame.click()
let nextpage=await event;
let newpage=await nextpage.getByText("New Window")
})
