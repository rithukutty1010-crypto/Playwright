let{test,chromium}=require("@playwright/test")
test.use({
    headless:false,
    browserName:"chromium"
})
test("windowhandling",async()=>{    
let browser=await chromium.launch();
let context=await browser.newContext();
let page=await context.newPage();
await page.goto("https://letcode.in/window")
let event= context.waitForEvent('page')
let homepage=await page.getByText("Goto Home")
await homepage.click()
let nextpage=await event;
await page.waitForTimeout(2000)
let move=await nextpage.getByText(" AUI - 2 ")
await move.click()
let drag=await nextpage.locator("#draggable")
let drop =await nextpage.locator("#droppable")
await drag.dragTo(drop);
await page.waitForTimeout(3000)
})
