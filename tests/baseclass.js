let{chromium}=require("@playwright/test")
async launchBrowser(){
this.browser=await chromium.launch({headless:false});
this.context=await this.browser.newContext();
this.page=await this.context.newPage();
}
goto ("www.amazon.in")
page.locator