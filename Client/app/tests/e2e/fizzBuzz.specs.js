describe('Fizz Buzz', function() {
    it('Title is correct on page', function() {
        browser.get('http://localhost:8080');

        expect(browser.driver.getTitle()).toEqual('AngularJS FizzBuzz App');
    });
});