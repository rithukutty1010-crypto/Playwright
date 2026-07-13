let {test}=require("@playwright/test")
test.use({
headless:false,
browserName:"chromium"
})
test('Dropdown',async({page})=>{
await page.goto("https://demo.automationtesting.in/Register.html")
let select=await page.locator("#Skills")
//using visible text
await select.selectOption("Adobe Photoshop")
//using index
let choose=await page.locator("#countries")
await select.selectOption({index:3})
await page.waitForTimeout(3000)
//visible text
let year=await page.getByPlaceholder("Year")
await year.selectOption("1991")
//await page.waitForTimeout(3000)

//multiple dropdown
//await page.goto("https://www.jqueryscript.net/demo/Drop-Down-Combo-Tree/")
//let multi=await page.locator("#justAnInputBox")
//await multi.selectOption(['choice 1'])
//await page.goto(3000)
//text all content
await page.goto("https://the-internet.herokuapp.com/")
let all=await page.getByText("A/B Testing").allTextContents()
for(let text of all){
console.log("All content")
}

//await page.waitForTimeout(3000)
})