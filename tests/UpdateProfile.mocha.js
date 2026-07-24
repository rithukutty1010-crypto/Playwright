const{chromium}=require("playwright")
let Profile=require("../Naukri/Naukri/NaukriLoginPages")
describe("UpdateProfile",function(){
this.timeout(30000)
let browser;
let page;
let update;
before(async function(){
 browser=await chromium.launch({headless:false});
 page=await browser.newPage();
 update=new Profile(page);
await update.goto();
})
it("Verify Login",async function(){
await update.Login(
    "rithukutty1010@gmail.com",
    "Saikutty@111"
)
})
it("CompleteProfile",async function(){
await update.completeProfile();
})

//it("UploadResume",async function()
//await update.uploadResume();
//})
it("Skills",async function(){
await update.SkillsKeys("playwright");
})
after(async function(){
await browser.close();
})
})