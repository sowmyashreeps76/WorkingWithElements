const { test, expect } = require('@playwright/test');
test('Working with Shadow DOM', async ({ page }) => {

    await page.goto('http://watir.com/examples/shadow_dom.html')

    await page.locator('input[type="text"]').fill("Sowmya")
    await page.waitForTimeout(5000)

})

test('Working with Shadow DOM2', async ({ page }) => {

    await page.goto('https://books-pwakit.appspot.com/')
    await page.locator('#input').fill('Science')

    await page.keyboard.press('Enter')

     //await expect(page.locator('text=Science and Method')).toBeVisible()

     await page.waitForTimeout(5000)

     //How to refresh the Page or Reload the page

      await page.reload()

      //or 

     await page.keyboard.press('F5')
     

     await page.goBack()

//     await page.waitForTimeout(5000)

     await page.goForward()

})