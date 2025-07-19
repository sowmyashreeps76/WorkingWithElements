// In playwright there is no need to do scrolling beacouse playwright automatically scroll

//if playwright did not scroll automatically
// we can use scrollIntoViewIfNeeded() method

const { test, expect } = require('@playwright/test');

test('scroll to specific element', async ({ page }) => {

    await page.goto("https://www.imdb.com/chart/top/");

    // let dJanagoMovieLink = await page.locator("//h3[contains(text(),'128. Hamilton')]");

    // await dJanagoMovieLink.scrollIntoViewIfNeeded();

    // await page.locator("//h3[contains(text(),'129. Hamilton')]").scrollIntoViewIfNeeded()  //using scrolling method

    //await dJanagoMovieLink.click();

    await page.locator("//h3[contains(text(),'129. Hamilton')]").click()   //automatically scroll using click method

    expect(await page.locator('h1 span').textContent()).toEqual('Hamilton')

});


