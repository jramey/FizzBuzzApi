(function() {
    'use strict';

    describe('Fizz Buzz Controller', function() {
        var scope, controller, fizzBuzzService, mockPromiseService;

        beforeEach(module('app', 'testUtilities'));

        beforeEach(inject(function($rootScope, $controller, _fizzBuzzService_, _mockPromiseService_) {
            fizzBuzzService = _fizzBuzzService_;
            mockPromiseService = _mockPromiseService_;
            scope = $rootScope.$new();
            controller = $controller('FizzBuzzController', {
                fizzBuzzService: fizzBuzzService
            });
        }));

        it("ValueIsOne", function() {
            mockPromiseService.resolvePromise(fizzBuzzService, 'getValue', { value: '1' });

            var promise = controller.getValue();
            scope.$apply();

            expect(controller.value).toBe('1');
        })

        it("ValueIsFizzBuzz", function() {
            mockPromiseService.resolvePromise(fizzBuzzService, 'getValue', { value: 'FizzBuzz' });

            var promise = controller.getValue();
            scope.$apply();

            expect(controller.value).toBe('FizzBuzz');
        })
    });
})();