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
        vm.invalidData = false;

        function getValue() {
            fizzBuzzService.getValue(vm.number)
                .then(function(data) {
                    vm.invalidData = false;
                    vm.value = data.value;
                }, function(response) {
                    vm.invalidData = true;

                    if (response.data.code == "NOT_A_NUMBER")
                        vm.value = "HEY! Next time give me a number!";
                });
        }
    }
})();