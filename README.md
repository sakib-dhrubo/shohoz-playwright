# Shohoz Bus Booking Automation Framework

## Overview
This is an automated testing framework built using Playwright for testing the Shohoz bus booking platform. The framework implements the Page Object Model design pattern and provides a scalable structure for both UI and API testing.

## Features
- Page Object Model architecture
- Configuration management
- Cross-browser testing support
- Screenshot and video capture on failures
- HTML report generation
- Reusable components and helper functions
- Easy to maintain and scale

## Project Structure
```
playwright-automation/
├── package.json
├── playwright.config.js
├── tests/
│   └── bus-booking.spec.js
├── page-objects/
│   ├── HomePage.js
│   └── BusSearchPage.js

```

## Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation
1. Clone the repository:
```bash
git clone <repository-url>
cd playwright-automation
```

2. Install dependencies:
```bash
npm install
```

3. Install Playwright browsers:
```bash
npx playwright install
```

## Running Tests

### Run all tests in headless mode
```bash
npm test
```

### Run tests in headed mode (browser visible)
```bash
npm run test:headed
```

### View HTML test report
```bash
npm run report
```

## Test Scenarios
The framework currently covers the following test scenarios:
1. Verify default bus selection
2. Search for one-way tickets
3. Apply filters (AC buses and specific operators)
4. Select lowest price ticket
5. Verify maximum ticket selection
6. Validate trip details

## Configuration
Test configuration can be modified but I will add this in future

## Reporting
The framework generates HTML reports after test execution, including:
- Test results summary
- Detailed test steps
- Screenshots of failures
- Test execution videos (on failure)

## Best Practices
- Keep page objects focused and maintainable
- Use meaningful test and function names
- Add comments for complex logic
- Follow the single responsibility principle
- Keep selectors updated and maintainable

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Troubleshooting
Common issues and solutions:

1. **Tests failing due to timeouts**
   - Increase the timeout in playwright.config.js
   - Check your internet connection
   - Verify if selectors are still valid

2. **Element not found errors**
   - Update selectors in page objects
   - Add wait conditions if needed
   - Check if the element is in viewport

## Future Enhancements
- [ ] Add API testing layer
- [ ] Implement data-driven testing
- [ ] Add CI/CD pipeline integration
- [ ] Implement parallel test execution
- [ ] Add cross-browser testing configurations
- [ ] Implement visual regression testing

## License
This project is licensed under the MIT License - see the LICENSE.md file for details

## Author
[Sakib Mahmood Dhrubo]

## Acknowledgments
- Playwright Documentation
- Shohoz Platform
- Page Object Model Pattern

## Support
For support, please create an issue in the repository or contact [sakib.dhrubo@gmail.com]