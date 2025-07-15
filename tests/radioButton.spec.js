import { test, expect } from '@playwright/test'

test('Radio Button example', async ({ page }) => {
    await page.goto("https://register.rediff.com/register/register.php?FormName=user_details")
    await page.locator('//input[@value="m"]').check()
    await expect (page.locator('//input[@value="f"]')).not.toBeChecked()

    await page.locator('//input[@value="f"]').check()
    await expect(page.locator('//input[@value="m"]')).not.toBeChecked()
    await expect(page.locator('//input[@value="f"]')).toBeChecked()

    await page.waitForTimeout(5000)

    const ischecked = await page.locator('//input[@value="f"]').isChecked()
    console.log(ischecked);
    
})


//uncheck is not work for radio button
//this code will throw error 
// because using uncheck() method is not work for radio butto

test('Working with Radio button - example 2', async ({ page }) => {

    await page.goto('https://demo.guru99.com/test/radio.html')
    
    await page.locator('input[value="Option 2"]').check()

    await page.locator('input[value="Option 2"]').uncheck()

    await page.waitForTimeout(5000)

})