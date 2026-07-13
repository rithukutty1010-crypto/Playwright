let {test}=require("@playwright/test")
test.use({
headless:false,
browserName:"chromium"

})
test('ElementTest',async({page})=>{
await page.goto("https://the-internet.herokuapp.com/hovers")
//mouse action
//hover

let image=await page.getByAltText("User Avatar")
await image. first().hover();
//await page.waitForTimeout(3000)
await page.goto("https://the-internet.herokuapp.com/add_remove_elements/")
let clickon=await page.getByRole('button',{name:'Add Element'})

await clickon.click();
await page.waitForTimeout(3000)

//drag and drop
await page.goto("https://the-internet.herokuapp.com/drag_and_drop")
let drag=await page.locator("#column-a")
let drop=await page.locator("#column-b")
await drag.dragTo(drop);
//await page.waitForTimeout(3000)
await page.dragAndDrop("#column-a","#column-b")
//await page.waitForTimeout(3000)
//double click
await page.goto("https://demoqa.com/buttons")
let dblclk=await page.locator("#doubleClickBtn")
await dblclk.dblclick()
await page.waitForTimeout(3000)

//right click
let rightclk=await page.getByText("Right Click Me")
await rightclk.click({button:'right'})

await page.goto("https://www.amazon.in/")
let type=await page.getByPlaceholder("Search Amazon.in")
//await page.keyboard.press("ArrowDown")
//await page.keyboard.press("Enter")
//await type.click();
//await page.keyboard.type("Laptop")
//await page.keyboard.press("Enter")
//await page.waitForTimeout(3000)
//for(let i=0;i<6;i++){
  //  await page.keyboard.press("Backspace")
//}

//await page.waitForTimeout(3000)
//await page.keyboard.press("ArrowDown")
//await page.keyboard.press("Enter")
//await page.waitForTimeout(3000)
//await page.keyboard.down("Shift")
//await page.keyboard.press("ArrowLeft")
//await page.keyboard.press("ArrowLeft")
//await page.keyboard.press("ArrowLeft")
//await page.keyboard.down("Shift")
//await page.keyboard.press("Control+A")
//let left=await page.getByText("Next slide")
//await page.keyboard.press('ArrowLeft')
//await page.keyboard.press('ArrowLeft')
//await page.keyboard.press('ArrowLeft')
//await page.keyboard.press('ArrowLeft')
//await page.waitForTimeout(2000)
let down=await page.getByRole('textbox',{name:'Prime Details'});
await page.keyboard.press("ArrowDown")
await page.keyboard.press("F5")
//await page.waitForTimeout(2000)
let Search=await page.getByPlaceholder("Search Amazon.in")
await Search.click();
await page.keyboard.press('1')
await page.keyboard.press('2')
await page.keyboard.press('3')
await page.keyboard.press('4')
await page.keyboard.press('5')
//await page.waitForTimeout(3000)
await page.keyboard.press('l')
await page.keyboard.press('i')
await page.keyboard.press('p')
await page.keyboard.press('b')
await page.keyboard.press('a')
await page.keyboard.press('l')
await page.keyboard.press('m')




})
