exports.config = {
    framework: 'jasmine',
    seleniumServerJar: './node_modules/protractor/selenium-server-standalone-3.3.1.jar',
    chromeDriver: './node_modules/protractor/chromedriver',
    specs: [
        './tests/e2e/*.js'
    ],
    maxSessions: 1,
    seleniumPort: null,
    onPrepare: function() {
        browser.driver.get('http://localhost:8080/');
        browser.ignoreSynchronization = true;

    },
    baseUrl: 'http://localhost:8080/',

    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: [
                'incognito',
                'disable-extensions',
            ]
        }
    },
};