const { browser, test, expect } = require('@playwright/test');
const fs = require('fs')
const path = require('path');
test.describe('Automation - Working With Elements', () => {

    test('Playwright Test Case - upload file', async ({ page }) => {
        await page.goto("https://the-internet.herokuapp.com/upload") 
        await page.locator('#file-upload').setInputFiles('testData/image_3.jpg')
        await page.locator('//input[@type="submit"]').click()
        await page.waitForTimeout(5000)

    })
    

    //upload multiple files
    test('Upload Multiple files and assert', async ({ page }) => {

        await page.goto('http://blueimp.github.io/jQuery-File-Upload/')

        // await page.setInputFiles('input[type="file"]', [
        //     './testData/files/21. Test Design techniques.png',
        //     './testData/files/24. Example Defect.png'
        // ])

        await page.locator('input[type="file"]').setInputFiles(['testData/image1.jpg', 'testData/home_banner-3.jpg'])

        await expect(page.locator('//p[@class="name"]').nth(0)).toHaveText('image1.jpg')
        await expect(page.locator('p.name').nth(1)).toHaveText('home_banner-3.jpg')

        await page.waitForTimeout(5000)

    })

    
})