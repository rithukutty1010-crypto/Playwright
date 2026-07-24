const{chromium}=require("playwright")
let Login=require("../Naukri/Naukri/NaukriLoginPages")
describe("NaukriLogin",function(){
this.timeout(30000)
let browser;
let page;
let login;
before(async function(){
browser=await chromium.launch({headless:false})
page=await browser.newPage()
login=new Login(page)
await login.goto()
})
it("Verify Login",async function(){
await login.Login(
    "rithukutty1010@gmail.com",
    "Saikutty@111"
)
})
it("Verify Title",async function(){
let Title=await page.title();
console.log(Title);
let url=await page.url();
console.log(url)
})
after(async function(){
await browser.close()
})


})