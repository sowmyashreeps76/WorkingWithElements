import { test, expect } from '@playwright/test'

test('Drag and drop example', async ({ page }) => {
    await page.goto("https://kitchen.applitools.com/ingredients/drag-and-drop")
    // await page.locator("#menu-fried-chicken").dragTo(page.locator("#plate-items"))
    // await page.locator("#menu-hamburger").dragTo(page.locator("#plate-items"))
    // await page.locator("#menu-ice-cream").dragTo(page.locator("#plate-items"))
    // await page.waitForTimeout(5000)

    const sourceFriedChicken = await page.locator('#menu-fried-chicken');
    const sourceHamburger = await page.locator('#menu-hamburger');
    const sourceIceCream = await page.locator('#menu-ice-cream');

    const targetPlateItems = await page.locator('#plate-items');

    await sourceFriedChicken.dragTo(targetPlateItems);
    await sourceHamburger.dragTo(targetPlateItems);
    await sourceIceCream.dragTo(targetPlateItems);
    await page.waitForTimeout(5000)

})