const { defineSupportCode } = require('cucumber');

defineSupportCode(({ After }) => {
  After(function () {
    return this.driver.quit();
  });
});
