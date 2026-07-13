let{test}=require('@playwright/test')
test.use({
headless:false,
browserName:"chromium"
})
test("frame2",async({page})=>{
await page.goto("https://the-internet.herokuapp.com/nested_frames")
let leftframe=await page.frameLocator("//frame[@name='frame-left']")
let middleframe=await page.frameLocator('//frame[@name="frame-middle"]')
let rightframe=await page.frameLocator('//frame[@name="frame-right"]')
let bottomframe=await page.frameLocator('//frame[@name="frame-bottom"]')
await page.goto("https://the-internet.herokuapp.com/iframe?utm_source=chatgpt.com")
let type=await page.frameLocator("mce_0_ifr")
await page.waitForTimeout(3000)
})