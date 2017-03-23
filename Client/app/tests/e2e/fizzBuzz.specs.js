describe('Fizz Buzz', function() {
    beforeEach(function() {
        browser.get('http://localhost:8080');
        element(by.model('vm.number')).clear();
    });

    it('Title is correct on page', function() {
        expect(browser.driver.getTitle()).toEqual('AngularJS FizzBuzz App');
    });

    it('Text displays One for Number One', function() {
        element(by.model('vm.number')).sendKeys('1');
        element(by.buttonText('Submit')).click();
        browser.sleep(1000);
        browser.waitForAngular();
        expect(element(by.binding('vm.value')).getText()).toEqual('1');
    });

    it('Text displays Fizz for Number Three', function() {
        element(by.model('vm.number')).sendKeys('3');
        element(by.buttonText('Submit')).click();
        browser.sleep(1000);
        browser.waitForAngular();
        expect(element(by.binding('vm.value')).getText()).toEqual('Fizz');
    });

    it('Text displays Buzz for Number Five', function() {
        element(by.model('vm.number')).sendKeys('5');
        element(by.buttonText('Submit')).click();
        browser.sleep(1000);
        browser.waitForAngular();
        expect(element(by.binding('vm.value')).getText()).toEqual('Buzz');
    });

    it('Text displays FizzBuzz for Number Fifteen', function() {
        element(by.model('vm.number')).sendKeys('15');
        element(by.buttonText('Submit')).click();
        browser.sleep(1000);
        browser.waitForAngular();
        expect(element(by.binding('vm.value')).getText()).toEqual('FizzBuzz');
    });

    it('Text displays FizzBuzz for Number Fifteen', function() {
        element(by.model('vm.number')).sendKeys('sadf');
        element(by.buttonText('Submit')).click();
        browser.waitForAngular();
        browser.sleep(1000);
        expect(element(by.binding('vm.value')).getText()).toEqual('HEY! Next time give me a number!');
        expect(element(by.binding('vm.value')).getAttribute('class')).toContain('ng-binding error');
    });
});