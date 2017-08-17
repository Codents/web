const { By, until } = require('selenium-webdriver');
const Assert = require('selenium-webdriver/testing/assert');
const { defineSupportCode } = require('cucumber');

const TIMEOUT = 10000;

defineSupportCode(({ Given, When, Then }) => {
  Given(/^Accedo a la Home en ([^"]*)$/, function (url) {
    return this.driver.get(url);
  });

  When(/^Hago click en el menu ([^"]*)$/, function (menu) {
    return this.driver
      .wait(until.elementLocated(By.css(menu)), TIMEOUT)
      .then(function (element) {
        element.click();
      })
      .catch(function (err) {
        console.error(err);
      });
  });

  Then(/^Estoy en la seccion ([^"]*)$/, function (menu) {
    return menu;
  });

  When(/^Hago click en el icono de ([^"]*)$/, function (icono) {
    return this.driver
      .wait(until.elementLocated(By.css(icono)), TIMEOUT)
      .then(function (element) {
        element.click();
      })
      .catch(function (err) {
        console.error(err);
      });
  });

  Then(
    /^Estoy en pagina del proyecto en "([^"]*)" y cliqueo en el icono con clase ([^"]*)$/,
    function (githubUrl, icono) {
      if (icono === '.github-icon') {
        return this.driver
          .wait(until.elementLocated(By.css('strong a')), TIMEOUT)
          .then(function (element) {
            element
              .getAttribute('href')
              .then(function (attr) {
                const assert = new Assert(attr === githubUrl);
                assert.isTrue('Fallo al navegar hasta el proyecto en Github');
              })
              .catch(function (err) {
                console.error(err);
              });
          });
      }
      return false;
    }
  );
});
