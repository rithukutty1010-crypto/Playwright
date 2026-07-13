let{test}=require("@playwright/test")
test.use({
headless:false,
browserName:"chromium"
})
test("Actions",async({page})=>{
//await page.goto("https://the-internet.herokuapp.com/hovers")
//let image=await page.getByAltText("User Avatar")
//await image.first().hover();
//await page.waitForTimeout(3000)
await page.goto("https://demoqa.com/buttons")
let doubleclk=await page.getByText("Double Click Me")
await doubleclk.dblclick()
//await page.waitForTimeout(3000)
let rightclk=await page.getByText("Right Click Me")
await rightclk.click({button:'right'})
await page.waitForTimeout(3000)
await page.goto("https://demoqa.com/droppable")
let drag=await page.locator('#draggable').first()
let drop=await page.locator('#droppable').first()
await drag.dragTo(drop)
//await page.waitForTimeout(3000)
await page.goto("https://www.amazon.in/")
let enter=await page.getByPlaceholder('Search Amazon.in')
await page.keyboard.type("Mobile")
//await page.keyboard.press("Enter")
//await page.keyboard.press("Escape")
await page.waitForTimeout(3000)
})