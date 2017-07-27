const seleniumWebdriver = require('selenium-webdriver');
const { defineSupportCode } = require('cucumber');

defineSupportCode(({ Given, When, Then }) => {
  Given('Accedo a la Home en {stringInDoubleQuotes}', function (url) {
    return this.driver.get(url);
  });

  When(/^Hago click en el menu ([^"]*)$/, function (menu) {
    return this.driver.findElement({ linkText: menu }).then(element => {
      return element.click();
    });
  });

  Then(/^Estoy en la seccion ([^"]*)$/, menu => {});

  When(/^Hago click en el icono de ([^"]*)$/, function (icono) {
    return this.driver.findElement({ linkText: icono }).then(element => {
      return element.click();
    });
  });

  Then(/^Estoy en pagina del proyecto en ([^"]*)$/, icono => {});
});
