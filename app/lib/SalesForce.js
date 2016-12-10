var webdriver = require('selenium-webdriver');
var actions = require('selenium-webdriver/lib/actions');

var By = webdriver.By,
    until = webdriver.until;

var SalesForce = function (driver) {
    this.driver = driver;
};

SalesForce.prototype = {
    gotoTimecards: function (id) {
        var linkText = By.linkText('Timecards');
        this.driver.wait(until.elementLocated(linkText), 10000);
        this.driver.findElement(linkText).click();
        return this;
    },
    newEntry: function () {
        var elementName = By.name('new');
        this.driver.wait(until.elementLocated(elementName), 10000);
        this.driver.findElement(elementName).click();
        return this;
    },
    copyFromPreviousWeek: function () {
        var visibleElement = By.className('f-btn f-unselectable f-box-item f-toolbar-item f-btn-header-toolbar-medium');
        var invisibleElement = By.className('f-btn f-unselectable f-box-item f-toolbar-item f-btn-header-toolbar-medium f-btn-over');

        var button = By.id('button-1104');
        this.driver.wait(until.elementLocated(button), 10000);
        this.driver.actions().mouseMove(this.driver.findElement(button)).click();
        // this.driver.findElement(By.linkText('Copy From Previous Week')).submit();
        // var self = this.driver;
        // this.driver.findElement(visibleElement).then(function (elem) {
        //     self.actions().mouseMove(visibleElement);
        //     self.findElement(invisibleElement).click().perform();
        //     self.sleep(5000);
        // });

        return this;
    }
};

module.exports = SalesForce;
