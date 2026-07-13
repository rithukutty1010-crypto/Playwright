let{test}=require("@playwright/test")
const { asyncWrapProviders } = require("node:async_hooks")
test.use({
headless:false,
browserName:"chromium"
})
test('dropdown2',async({page})=>{
    await page.goto("https://demoqa.com/select-menu")
    let colours=await page.locator("#oldSelectMenu")
    //visible text
    await colours.selectOption("Green")
    await page.waitForTimeout(3000)
//using values
await colours.selectOption({value:'3'})
//using index
await colours.selectOption({index:6})
  await page.waitForTimeout(3000)
  //multiple dropdown
let cars=await page.locator("#cars")

await cars.selectOption(['volvo','saab','audi']);
  await page.waitForTimeout(3000)

  //textallcontet()
  let selectcars=await page.getByText("Standard multi select").allTextContents();
  for(let alltype of selectcars){
  console.log("All option")
  }
 await page.waitForTimeout(3000)
})