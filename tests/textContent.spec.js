const { test, expect } = require('@playwright/test');

test("Working with text", async ({ page }) => {
    await page.goto("https://register.rediff.com/register/register.php?FormName=user_details")
    await expect(page.locator('//h2[text()="Create a Rediffmail account"]')).toHaveText("Create a Rediffmail account")

    const text = page.locator('//h2[text()="Create a Rediffmail account"]').textContent() //saving the value to variable
    
    console.log(text);
    

})

test("Working with text2 ", async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

    //const textvalue = await page.locator('.example>h3').textContent()

    const textvalue = await page.locator('.example>h3').innerText()

   console.log(textvalue)

})

//array

test("Working with text content", async ({ page }) => {

    await page.goto("https://www.flipkart.com/")

    await expect(page.locator('//a[@aria-label="Mobiles"]/div/div/span/span')).toHaveText("Mobiles")

   const textvalue = await page.locator('//a[@aria-label="Mobiles"]/div/div/span/span').textContent()

   console.log(textvalue)

   const values = await page.locator('//a[@class="_1ch8e_"]/div/div/span/span').allTextContents()

   console.log(values)
})