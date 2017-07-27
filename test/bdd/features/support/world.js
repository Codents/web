require('chromedriver');
const seleniumWebdriver = require('selenium-webdriver');
const { defineSupportCode } = require('cucumber');

function CustomWorld() {
  this.driver = new seleniumWebdriver.Builder().forBrowser('chrome').build();
}

defineSupportCode(({ setWorldConstructor }) => {
  setWorldConstructor(CustomWorld);
});
