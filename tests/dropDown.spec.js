import { test, expect } from '@playwright/test'

test('drop Down example', async ({ page }) => {
    await page.goto("https://register.rediff.com/register/register.php?FormName=user_details")
    // 1.text
    await page.locator('#country').selectOption("Australia")
    await page.waitForTimeout(5000)

    // 2.value or label
    // 1.label attribute
    await page.locator('#country').selectOption({ label: "China" })
    await page.waitForTimeout(5000)

    // to verify china selected or not 
    await expect(page.locator('#country')).toHaveAttribute('value', '43')

    // 2.value attribute
    await page.locator('#country').selectOption("20") //Belgium
    await page.waitForTimeout(5000)



    //index
    await page.locator('#country').selectOption({ index: 5 }) //Antarctica
    await page.waitForTimeout(5000)

    // assertion
    // expecting 200 contrys but it has 248 contrys- it is going to fail
    //  error - Locator: locator('#country>option')
    // Expected: 200
    // Received: 248
    // await expect.soft(page.locator("#country>option")).toHaveCount(200)  // Assertions


    await expect.soft(page.locator("#country>option")).toHaveCount(200) //soft - eventhogh it is going to fail it will execute next statement


    // to get all dropdown values
    const dropdown = page.locator('#country')
    const options = await dropdown.locator('option').allTextContents();  //'option' here is HTML <option> tag
    console.log(options)
    await page.waitForTimeout(5000)

})

// Multiple selected items
//await page.getByLabel('Choose multiple colors').selectOption(['red', 'green', 'blue']);

