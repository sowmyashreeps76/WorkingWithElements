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

// download file
 test('Download a Single file and assert', async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/download')

        const [download] = await Promise.all([
            page.waitForEvent('download'),
            page.locator('//a[@href="download/Agile.PNG"]').click()
        ]);

        //save file 

        const suggestedFileName = download.suggestedFilename()
        const filePath = 'downloads/' + suggestedFileName
        await download.saveAs(filePath)
        expect(fs.existsSync(filePath)).toBeTruthy() // whether file is downloaded or not 

        //export files 
    })

    //download multiple file
     test('Download Multiple files and assert', async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/download')

        // const fileNames = ["sign.jpg", "image.png"]  //name of the file -text
        const fileNames = ['//a[@href="download/Screenshot (7).png"]', '//a[@href="download/content.jpg"]'] //locator of the file
        


        for (const fileName of fileNames) {
            const [download] = await Promise.all([
                page.waitForEvent('download'),
                // page.locator(`text=${fileName}`).click()  //locator with text
                page.locator(fileName).click()
            ]);

            const suggestedFileName = download.suggestedFilename()
            const filePath = 'downloads/' + suggestedFileName
            await download.saveAs(filePath)
            expect(fs.existsSync(filePath)).toBeTruthy()
        }
    })

    // direct download - downloading from internet
         test('Direct Download and assert', async ({ page }) => {

        // Define the image URL
        const imageUrl = 'https://media.istockphoto.com/id/2181735944/photo/natural-mountains-landscapes.jpg?b=1&s=612x612&w=0&k=20&c=7WJMhHseLhVBEDa8N7ww7J_oqm_w_PlvUlxZPsmF3UI=';

        // Fetch the image using Playwright's request API
        const response = await page.request.get(imageUrl);

        // Ensure the response is OK
        if (response.ok()) {
            // Get the image buffer
            const buffer = await response.body();

            // Define the 'downloads' folder path inside your project folder
            const downloadsFolder = path.join(__dirname + "/..", 'downloads');
            // Check if 'downloads' folder exists, if not, create it
            if (!fs.existsSync(downloadsFolder)) {
                fs.mkdirSync(downloadsFolder, { recursive: true });
            }

            // Define the file name and path to save the image inside the 'downloads' folder
            const savePath = path.join(downloadsFolder, 'hills.jpg');

            // Write the buffer to a file
            fs.writeFileSync(savePath, buffer);
            console.log(`Image downloaded successfully and saved to ${savePath}`);
        } else {
            console.log(`Failed to download the image. Status code: ${response.status()}`);
        }
    })


     test('Direct Download and assert example 2', async ({ page }) => {

        // Define the image URL
        const imageUrl = 'https://m.media-amazon.com/images/I/71GXqew8QuL._SX522_.jpg';

        // Fetch the image using Playwright's request API
        const response = await page.request.get(imageUrl);

        // Ensure the response is OK
        if (response.ok()) {
            // Get the image buffer
            const buffer = await response.body();

            // Define the 'downloads' folder path inside your project folder
            const downloadsFolder = path.join(__dirname + "/..", 'downloads');
            // Check if 'downloads' folder exists, if not, create it
            if (!fs.existsSync(downloadsFolder)) {
                fs.mkdirSync(downloadsFolder, { recursive: true });
            }

            // Define the file name and path to save the image inside the 'downloads' folder
            const savePath = path.join(downloadsFolder, 'parrot.jpg');

            // Write the buffer to a file
            fs.writeFileSync(savePath, buffer);
            console.log(`Image downloaded successfully and saved to ${savePath}`);
        } else {
            console.log(`Failed to download the image. Status code: ${response.status()}`);
        }
    })