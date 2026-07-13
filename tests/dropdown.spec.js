let{test}=require("@playwright/test")
test.use({
    headless:false,
    browserName:"chromium"

})
test('dropdown',async({page})=>{
await page.goto("https://letcode.in/dropdowns")
//single dropdown
let fruits=await page.locator("#fruits")
//select by using visible text
await fruits.selectOption("Mango")
await page.waitForTimeout(3000)
//select by using values
await fruits.selectOption({value:'1'});
await page.waitForTimeout(3000)
//select by using index
await fruits.selectOption({index:4})
//multiple dropdown
let multipledrop=await page.locator("#superheros")
await multipledrop.selectOption(['Ant-Man','Aquaman','The Avengers'])
await page.waitForTimeout(3000)
await multipledrop.selectOption(['Batman'])
await page.waitForTimeout(3000)

//alltextcontent
let superheros=await page.locator("#superheros").allTextContents();
//await superheros.allTextContents()
await page.waitForTimeout(3000)
for(let All of superheros){
console.log("options")
}

await page.waitForTimeout(5000)



})