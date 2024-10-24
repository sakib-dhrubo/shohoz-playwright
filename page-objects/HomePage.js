const { expect } = require('@playwright/test');

class HomePage {
  constructor(page) {
    this.page = page;
    this.bus = page.locator('app-navbar a[href="/bus-tickets"]');
  }

  async navigate() {
    await this.page.goto('/');
  }

  async verifyBusSelected() {
    await expect(this.bus).toBeVisible();
    await expect(this.bus).toHaveClass(/current/);
  }

  async searchBusTicket() {
    // Click and type the from location
    await this.page.getByPlaceholder('From').click();
    await this.page.getByPlaceholder('From').pressSequentially("Dhaka", { delay: 100 });

    // Select the from location from the dropdown and click
    const fromLocator = this.page.locator("div[class='station-filter-dropdown']");
    await fromLocator.waitFor({ state: 'visible' });
    await this.page.getByRole('button', { name: 'Dhaka', exact: true }).click();

    // Type the to location from the dropdown and click
    await this.page.getByPlaceholder('To').pressSequentially("Chittagong", { delay: 100 });
    await this.page.getByRole('button', { name: 'Chittagong', exact: true }).click();

    // Pick the date
    await this.page.getByRole('gridcell', { name: 'Wednesday, October 30,' }).locator('div').click();

    // Click on search button
    await this.page.getByRole('button', { name: 'Search' }).click();
  }
}

module.exports = HomePage;