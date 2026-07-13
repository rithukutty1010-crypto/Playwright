let{test}=require('@playwright/test')
test.use({
headless:false,
browserName:'chromium'
})
test("frame2",async ({page})=>{
await page.goto("https://the-internet.herokuapp.com/nested_frames")
let leftframe=page.frameLocator('//frame[@name="frame-left"]')
let rightframe=page.frameLocator('//frame[@name="frame-right"]')
let middleframe=page.frameLocator('//frame[@name="frame-middle"]')
let bottomframe=page.frameLocator('//frame[@name="frame-bottom"]')
})


