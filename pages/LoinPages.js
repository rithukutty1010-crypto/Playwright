let{test,expect}=require("@playwright/test")
class Login{
constructor (page){
this.page=page;
this.UserName=page.locator('//input[@placeholder="Username"]');
this.Password=page.locator('//input[@placeholder="Password"]');
this.Signin=page.locator('//button[@type="submit"]')
this.dashBoard=page.locator('//a[@class="oxd-main-menu-item active"]')
}
async goto(){
await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
}
async Login(username,password){
await this.UserName.fill(username);
await this.Password.fill(password)
await this.Signin.click();
}
async verifyDashboard(){
await expect(this.dashBoard).toBeVisible();
}
}
module.exports=Login;