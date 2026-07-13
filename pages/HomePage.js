let{test,expect}=require("@playwright/test")
class Homepage{
constructor(page){
this.page=page;
this.Admin=page.getByRole('link', { name: 'Admin' });
this.Add=page.getByRole('button', { name: 'Add' })
this.UserRole=page.locator('//div[@class="oxd-select-text-input"]').first()
this.EmployeeName=page.locator('//input[@placeholder="Type for hints..."]')
this.EmployeeStatus=page.locator('//div[@class="oxd-select-text-input"]').nth(1)
this.UserName=page.locator('//input[@class="oxd-input oxd-input--active"]').nth(1)
this.Password=page.locator('//input[@type="password"]').first()
this.ConfirmPassWord=page.locator('//input[@type="password"]').nth(1)
this.Submit=page.locator('//button[@type="submit"]')
}
async goto(){
await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveSystemUser")

}
async Homepage(EmployeeName,UserName,Password,ConfirmPassWord){
await this.Admin.click();
await this.page.waitForTimeout(2000);
await this.Add.click();
await this.page.waitForTimeout(2000);
await this.UserRole.click();
await this.page.locator("//div[@role='option']//span[text()='Admin']").click();
await this.EmployeeName.fill(EmployeeName);
await this.page.getByText(EmployeeName).click();
await this.EmployeeStatus.click();
await this.page.getByText("Enabled").click();
await this.UserName.fill(UserName);
await this.Password.fill(Password);
await this.ConfirmPassWord.fill(ConfirmPassWord);
await this.Submit.click();
await this.page.waitForTimeout(5000);
}
}
module.exports=Homepage;