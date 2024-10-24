const { test, expect } = require('@playwright/test');
const HomePage = require('../page-objects/HomePage');
const BusSearchPage = require('../page-objects/BusSearchPage');

test.describe('Bus Booking Flow', () => {
  let homePage;
  let busSearchPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    busSearchPage = new BusSearchPage(page);
    await homePage.navigate();
  });

  test('Complete bus booking flow', async ({ page }) => {
    test.setTimeout(120000); // Set timeout for this test to 120 seconds

    await homePage.verifyBusSelected();
    await homePage.searchBusTicket();

    await busSearchPage.searchPageNavigation();
    await busSearchPage.applyFilter();
    await busSearchPage.chooseBus();
    await busSearchPage.selectSeats();

    // Click on this for the "Maximum 4 seats can be selected." alert
    await page.getByRole('button', { name: 'E2' }).click();

    // Alert shows up
    const warningPopupLocator = page.locator('.swal2-popup.swal2-modal.shohoz-alert.shohoz-alert--warning.max-seat-error');
    await warningPopupLocator.waitFor({ state: 'visible' });
    console.log('Warning popup is visible');

    // Close the popup
    await page.getByRole('button', { name: 'Close' }).click();

    // Click on Trip Details
    await page.getByText('Trip Details').click();

    // Locator for the dropping points
    await page.getByRole('button', { name: 'Dropping', exact: true }).click();
    const boardingPointLocator = page.locator('.boarding-points-list');
    const isVisible = await boardingPointLocator.isVisible();

    if (!isVisible) {
      console.log('The dropping points list is not visible.');
    } else {
      console.log('The dropping points list is visible.');
    }

    // Click on the Seats
    await page.locator('li').filter({ hasText: 'Seats' }).click();

    // Click the "Continue" button
    await page.getByRole('button', { name: 'Continue' }).click();
  });
});