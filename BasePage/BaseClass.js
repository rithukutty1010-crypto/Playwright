let{chromium}=require("@playwright/test")
class BaseClass{
constructor(page){
this.page=page;
}

async launchBrowser(){
this.browser=await chromium.launch({headless:false})
this.context=await this.browser.newContext();
this.page=await this.context.newPage();
return this.page;
}
async launchUrl(url){
await this.page.goto(url);
}
async fillTextBox(locator,value){
await this.page.locator(locator).fill(value);

}
async buttonClick(click){
await this.page.locator(locator).click();
}
async getText(locator){
 return await this.page.locator(locator).textContent();
}
async closeBrowser(locator){
await this.browser.close();
}


async clear(locator){
await this.page.locator(locator).clear();
}
async waitfortimeout(time){
await this.page.locator.waitfortimeout(3000);
}
async screenshot(locator,path){
await this.page.locator(locator).screenshot({path,fullpage:true});
}
async selectoption(locator,vale){
await this.page.locator(locator).selectoption(value);
}
async isSelected(locator){
await this.page.locator(locator).isSelected();
}
async doubleclick(locator){
await this.page.locator(locator).dblclick();
}
async isDisplayed(locator){
await this.page.locator(locator).isDisplayed();
}
async isEditable(){
await this.page.locator(locator).isEditable()
}
async isEnabled(locator){
await this.page.locator(locator).isEnabled()
}
async getAttribute(attribute,value){
await this.page.locator(locator).getAttribute(attribute);
}
async textContent(textContent){
await this.page.locator(locator).textContent();
}
async isVisible(locator){
return await this.page.locator(locator).isVisible();
}
async isHidden(locator){
return await this.page.locator(locator).isHidden();
}
}
module.exports=BaseClass

