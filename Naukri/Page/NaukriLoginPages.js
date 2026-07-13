
class Login{
constructor (page){
this.page=page;
this.Loginbutn=page.locator("//a[@id='login_Layer']");
this.UserName=page.getByplaceholder('[placeholder="Enter your active Email ID / Username"]')
this.Password=page.getByplaceholder('[placeholder="Enter your password"]');
this.LoginSubmit=page.locator('//button[@class="btn-primary loginButton"]')
}
async goto(){
await this.page.goto("https://www.naukri.com/")
}
async Login(UserName,Password){
await this.Loginbutn.click();
await this.UserName.fill(username);
await this.Password.fill(password);
await this.LoginSubmit.click();
}
}
module.exports=Login;