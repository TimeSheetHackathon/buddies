const os = require('os');

var OurThoughtWorks = require('./lib/ThoughtWorksLogin');
var conf = require('../private/configs');


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

var ourThoughtWorks = new OurThoughtWorks(driver);

//Keep the user saved
// .setID('abc');

ourThoughtWorks
    .open()
    .setID(conf.user)
    .setPassword(conf.password)
    .login();

// driver.close();
