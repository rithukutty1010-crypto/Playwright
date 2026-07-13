//Browswer Launch by manual process
//let{chromium}=require('playwright');

//(async()=>{
//let browser=await chromium.launch({headless:false});
//let context=await browser.newContext();
//let page= await context.newPage();
//await page.goto('https://web.whatsapp.com/');


//})();


 let {test}=require('@playwright/test');
 test('Launching Browser',async({page})=>{
await page.goto('https://web.whatsapp.com/');
 await page.waitForTimeout(3000);




 });