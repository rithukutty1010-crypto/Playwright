let{test,expect}=require("@playwright/test")
let LoginPage=require("../pages/LoinPages.js")
test("orange",async({page})=>{
let loginpage=new LoginPage(page)
await loginpage.goto();
await loginpage.Login("Admin","admin123");
await loginpage.verifyDashboard();
await expect(page).toHaveTitle(/OrangeHRM/);
//await page.waitForEvent(3000)
})
