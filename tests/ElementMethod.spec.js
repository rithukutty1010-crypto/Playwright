let {test}=require('@playwright/test');
test('ElementMethod',async({page})=>{
await page.goto("https://www.snapdeal.com/");
await page.waitForTimeout(3000);
let Searchbar=await page.getByPlaceholder("Search products & brands")
//isvisible()
let invisible=await Searchbar.isVisible();
if(invisible){
await Searchbar.fill("Mamaearth facewash")
}
else{
console.log("Element not visible")
}
await page.waitForTimeout(3000);
//type()
await Searchbar.type("Mamaearth facewash")
//clear()
await Searchbar.clear();
await page.waitForTimeout(3000);
//type()
await Searchbar.type("Mamaearth lipbalm")
await page.waitForTimeout(3000);
//isenabled()
let searchbutton=await page.getByRole('button', { name: 'Search' })
let clickable=await searchbutton.isEnabled();
await searchbutton.click();
//await page.waitForTimeout(5000);
//isdisabled()
//let dis=await page.locator("India's leading online shopping destination")
//let disabled=await dis.isDisabled()
await dis.click()
//textcontent()
let blog=await page.getByText("Sort by: ")
let text=await blog.textContent();
console.log(text)
await page.waitForTimeout(3000);
//get attributes
//let get=await page.locator("sd-icon sd-icon-cart-icon-white-2")
//let chart=await get.getAttribute("class");
//await page.waitForTimeout(3000);




})