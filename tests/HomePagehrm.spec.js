let{test,expect}=require("@playwright/test")
let Homepage=require('../pages/HomePage')
let LoginPage=require('../pages/LoinPages')
test("Homepagehrm",async({page})=>{
let homepage=new Homepage(page)
let loginpage=new LoginPage(page) 
await loginpage.goto();
await loginpage.Login("Admin","admin123");
await loginpage.verifyDashboard();
await expect(page).toHaveTitle(/OrangeHRM/);
await homepage.Homepage("Raj ravi","Manda123","Ma123456","Ma123456")
})