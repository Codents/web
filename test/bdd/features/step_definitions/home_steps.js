const { By, until } = require('selenium-webdriver');
const Assert = require('selenium-webdriver/testing/assert');
const { defineSupportCode } = require('cucumber');

defineSupportCode(({ Given, When, Then }) => {
  Given(/^Accedo a la Home en ([^"]*)$/, function (url) {
    return this.driver.get(url);
  });

  When(/^Hago click en el menu ([^"]*)$/, function (menu) {
    return this.driver
      .wait(until.elementLocated(By.css(menu)), 10000)
      .then(element => element.click());
  });

  Then(/^Estoy en la seccion ([^"]*)$/, function (menu) {
    return menu;
  });

  When(/^Hago click en el icono de ([^"]*)$/, function (icono) {
    return this.driver
      .wait(until.elementLocated(By.css(icono)), 10000)
      .then(element => element.click());
  });

  Then(/^Estoy en pagina del proyecto en ([^"]*)$/, function (icono) {
    const assert = new Assert();
    if (icono === '.github-icon') {
      return this.driver.wait(until.elementLocated(By.css('strong a')), 10000).then(element => {
        assert.isTrue(element.getAttribute('href') === 'https://github.com/Codents/web');
      });
    }
    return false;
  });
});
