import { test, expect } from '@playwright/test'

test('checkbox example', async ({ page }) => {
    await page.goto("https://register.rediff.com/register/register.php?FormName=user_details")


    const checked = await page.locator('//input[@type="checkbox"]').isChecked()
    console.log(checked);

    if (!checked){

        await page.locator('//input[@type="checkbox"]').check()
    // await page.waitForTimeout(5000)
    }


    // await page.locator('//input[@type="checkbox"]').check()
    // await page.waitForTimeout(5000)

    // assertion
    await expect(page.locator('//input[@type="checkbox"]')).toBeChecked()

    await page.locator('//input[@type="checkbox"]').uncheck()
    // await page.waitForTimeout(5000)

    //reverse assertion no to be checked 
    await expect(page.locator('//input[@type="checkbox"]')).not.toBeChecked()
})


test('checkbox example2', async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
const checkboxes = ["#checkBoxOption1","#checkBoxOption2","#checkBoxOption3"]

for (let checkbox of checkboxes)
    await page.locator(checkbox).check()
await page.waitForTimeout(5000)

})



test.only('checkbox example3 automatically taking locator as array', async ({ page }) => {
    
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")


// automatically create the array
const checkboxes = await page.$$('[type="checkbox"]') //insted of locator giving $$ symbole 
//giving common locator to all the element

for (let checkbox of checkboxes) {
    await checkbox.check();
  }
})
