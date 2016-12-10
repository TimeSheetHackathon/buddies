var enterTimecard = function (driver, conf) {
    var ourThoughtWorks = new OurThoughtWorks(driver);

    ourThoughtWorks
        .open()
        .setID(conf.name)
        .setPassword(conf.pwd)
        .login();

    var salesForce = new SalesForce(ourThoughtWorks.driver);

    salesForce
        .gotoTimecards()
        .newEntry()
        .copyFromPreviousWeek();

    driver.sleep(100000);
    driver.close();
}

module.exports = function (conf) {
    const os = require('os');

    var OurThoughtWorks = require('./lib/ThoughtWorksLogin');
    var SalesForce = require('./lib/SalesForce');

    var webdriver = require('selenium-webdriver'),
        chrome = require('selenium-webdriver/chrome'),
        By = require('selenium-webdriver').By,
        until = require('selenium-webdriver').until;

    var chromeOptions = new chrome.Options();
    var user = os.homedir();
    var user_data_dir = '%u/Library/Application\ Support/Google/Chrome/Default'.replace('%u', user);

    chromeOptions.addArguments("user-data-dir=%p".replace('%p', user_data_dir));

    var driver = new webdriver.Builder()
        .forBrowser('chrome')
        .withCapabilities(webdriver.Capabilities.chrome())
        .setChromeOptions(chromeOptions)
        .build();

    enterTimecard(driver, conf);
}
