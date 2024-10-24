const { expect } = require('@playwright/test');

class BusSearchPage {
  constructor(page) {
    this.page = page;
  }

  async searchPageNavigation() {
    // Navigated to the search page
    await this.page.waitForURL('**/booking/bus/search*');
    console.log('Navigated to the bus search page!');
  }

  async applyFilter() {
    // Apply filters
    await this.page.getByLabel('AC', { exact: true }).check();
    await this.page.getByLabel('Green Line Paribahan').check();
    await this.page.getByRole('button', { name: 'Low to High' }).click();
  }

  async chooseBus(operators) {
    // Choose the first available bus
    await this.page.locator('button.btn-book-ticket').first().click();
  }

  async selectSeats() {
    // Wait for the seat drawer to open
    await this.page.waitForSelector('div.viewer-counter-msg:has-text("Maximum 4 seats can be selected.")', { state: 'visible' });
    await this.page.waitForSelector('img[alt="Shohoz Loader"]', { state: 'hidden' });

    // Select the seats
    await this.page.getByRole('button', { name: 'D3' }).click();
    console.log('Waiting for D3 button to be selected');
    await this.page.waitForSelector('button.seat-selected:has-text("D3")', { state: 'visible', timeout: 60000 });
    console.log('Button D3 is now selected.');

    await this.page.getByRole('button', { name: 'F2' }).click();
    console.log('Waiting for F2 button to be selected');
    await this.page.waitForSelector('button.seat-selected:has-text("F2")', { state: 'visible', timeout: 60000 });
    console.log('Button F2 is now selected.');

    await this.page.getByRole('button', { name: 'F3' }).click();
    console.log('Waiting for  F3 button to be selected');
    await this.page.waitForSelector('button.seat-selected:has-text("F3")', { state: 'visible', timeout: 60000 });
    console.log('Button F3 is now selected.');

    await this.page.getByRole('button', { name: 'E1' }).click();
    console.log('Waiting for E1 button to be selected');
    await this.page.waitForSelector('button.seat-selected:has-text("E1")', { state: 'visible', timeout: 60000 });
    console.log('Button E1 is now selected.');
  }
}

module.exports = BusSearchPage;