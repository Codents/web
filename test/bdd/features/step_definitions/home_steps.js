const { By, until } = require('selenium-webdriver');
const { defineSupportCode } = require('cucumber');

defineSupportCode(({ Given, When, Then }) => {
  Given('Accedo a la Home en {stringInDoubleQuotes}', function (url) {
    this.driver.manage().window().maximize();
    return this.driver.get(url).then(() => true);
  });

  When(/^Hago click en el menu ([^"]*)$/, function (menu) {
    return this.driver.findElement({ css: menu }).then((element) => {
      return element.click();
    });
  });

  Then(/^Estoy en la seccion ([^"]*)$/, menu => {});

  When(/^Hago click en el icono de ([^"]*)$/, function (icono) {
    this.driver.wait(until.elementLocated(By.css(icono)), 10000).then(element => element.click());
  });

  Then(/^Estoy en pagina del proyecto en ([^"]*)$/, icono => {});
});
