
class Login{
constructor (page){
this.page=page;
this.Loginbtn=page.locator("//a[@id='login_Layer']");
this.UserName=page.getByPlaceholder("Enter your active Email ID / Username")
this.Password=page.getByPlaceholder("Enter your password");
this.LoginSubmit=page.locator('//button[@type="submit"]')
this.Profile=page.locator("//*[text()='Complete']/parent::*")
this.Resume=page.locator('//a[text()="Upload"]')
this.Skills=page.locator('//span[text()="Key skills"]').first()
this.CreateSkills=page.locator("//span[text()='editOneTheme']").nth(1)
this.AddSkills=page.locator("//input[@placeholder='Add skills']")
this.SaveSkills=page.locator('//button[@id="saveKeySkills"]')
}
async goto(){
await this.page.goto("https://www.naukri.com/")
}
async Login(UserName,Password){
await this.Loginbtn.click();
await this.UserName.fill(UserName);

await this.Password.fill(Password);
await this.LoginSubmit.click();

}
async completeProfile(){
await this.Profile.click();
}
//async uploadResume(){
//await this.ResumeInput.setInputFiles('path/to/resume.pdf');
//}
async SkillsKeys(){
await this.Skills.click();
await this.CreateSkills.click();
await this.AddSkills.fill(
    "Playwright, Java, SQL, Manual Testing, Automation Testing, Git, Jira, API Testing"
);
await this.SaveSkills.click();
}
}
module.exports=Login;