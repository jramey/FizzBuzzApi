(function() {
    'use strict';

    angular
        .module('app')
        .controller('FizzBuzzController', FizzBuzzController);

    FizzBuzzController.inject = ['fizzBuzzService'];

    function FizzBuzzController(fizzBuzzService) {
        var vm = this;
        vm.number = 0;
        vm.value = '';
        vm.getValue = getValue;

        function getValue() {
            fizzBuzzService.getValue(vm.number)
                .then(function(data) {
                    vm.value = data.value;
                })
                .catch(function(data) {
                    if (data.code == "NOT_A_NUMBER")
                        vm.value = "HEY! Next time give me a number!";
                });
        }
    }
})();