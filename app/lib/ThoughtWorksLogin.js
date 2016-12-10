var webdriver = require('selenium-webdriver');

var By = webdriver.By,
    until = webdriver.until;

var ThoughtWorksLogin = function (driver) {
    this.driver = driver;
};

ThoughtWorksLogin.prototype = {
    open: function () {
        this.driver.get('https://our.thoughtworks.com');
        this.driver.wait(until.titleContains('ThoughtWorks - Sign In'), 5000);
        return this;
    },

    setID: function (id) {
        var elementName = By.name('username');
        this.driver.wait(until.elementLocated(elementName), 5000);
        this.driver.findElement(elementName).sendKeys('');
        this.driver.findElement(elementName).sendKeys(id);
        return this;
    },

    setPassword: function (password) {
        var elementName = By.name('password');
        this.driver.wait(until.elementLocated(elementName), 5000);
        this.driver.findElement(elementName).sendKeys(password);
        return this;
    },

    login: function () {
        var className = By.className("button button-primary");
        this.driver.wait(until.elementLocated(className), 5000);
        this.driver.findElement(className).click();
        return this;
    }
};

module.exports = ThoughtWorksLogin;