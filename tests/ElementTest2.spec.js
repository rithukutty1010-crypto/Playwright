let {test}=require("@playwright/test")
test.use({

headless:false,
browserName:"chromium"
})
test('ElementTest',async({page})=>{
await page.goto("https://www.saucedemo.com")
let username=await page.locator("#user-name")
await username.fill("pavithra")
let passwrd=await page.locator("#password")
await passwrd.fill("Saikutty@123")
let select=await page.locator("#login-button")
await select.click()
//await page.waitForTimeout(3000)
//hover
//await page.goto("https://the-internet.herokuapp.com/hovers")
//let pic=await page.getByAltText("User Avatar")
//await pic.nth(1).hover();
//await page.waitForTimeout(3000)

//double click
await page.goto("https://demoqa.com/buttons")
let double=await page.locator("#doubleClickBtn")
await double.dblclick();
//await page.waitForTimeout(3000)
//right click
await page.goto("https://practice.expandtesting.com/context-menu")
let right=await page.locator("#hot-spot")
await right.click({button:'right'})
//drag and drop
await page.goto("https://practice.expandtesting.com/drag-and-drop")
let drag=await page.locator("#column-a")
let drop=await page.locator("#column-b")
await drag.dragTo(drop)
await page.dragAndDrop("#column-a","#column-b")
//await page.waitForTimeout(3000)
//key board control
await page.goto("https://www.amazon.in/")
let Arrow=await page.getByText("Next slide")
await page.keyboard.press("ArrowLeft")
await page.keyboard.press("Enter")
let Search=await page.locator("#twotabsearchtextbox")
await Search.type("Facewash")
//await page.keyboard.press("Enter")
await page.keyboard.press("Backspace")
await page.keyboard.press("Delete")
//modifier
await page.keyboard.press("Control+A")
await page.keyboard.press("Shift")
await page.keyboard.press('1')
await page.keyboard.press('2')
await page.keyboard.press('3')
await page.keyboard.press('A')
await page.keyboard.press('M')
await page.keyboard.press('A')
await page.keyboard.press('Z')
await page.keyboard.press('O')
await page.keyboard.press('N')
})