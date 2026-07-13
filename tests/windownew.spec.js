let{test,chromium}=require('@playwright/test');
test.skip('windowsnew',async()=>{
let browser= await chromium.launch();
let context= await browser.newContext();
let page1=await context.newPage();
await page1.goto("https://www.amazon.in/")
let page2=await context.newPage();
await page2.goto("https://www.myntra.com/")
let totalpages=await context.pages();
console.log("No of pages:",totalpages.length)
})

test("switchwindow",async()=>{
let browser=await chromium.launch();
let context=await browser.newContext();
let page=await context.newPage();
await page.goto("https://the-internet.herokuapp.com/windows");
let event=context.waitForEvent('page');
let clickelement=await page.getByText("Click Here")
await clickelement.click();
await page.waitForTimeout(3000);
let switchpage=await event;
await page.waitForTimeout(3000);
let nextpage=await switchpage.getByText("New Window")
let text = await nextpage.textContent()
console.log(text);


})
