(function() {
    'use strict';

    angular
        .module('app')
        .service('fizzBuzzService', FizzBuzzService);

    FizzBuzzService.inject = ['$http', '$q'];

    function FizzBuzzService($http, $q) {
        this.getValue = getValue;

        function getValue(number) {
            var deferred = $q.defer();

            $http.post('http://localhost:5000/api/fizzbuzz', { value: number })

            .then(function(response) {
                deferred.resolve({ value: response.data.value })
            }, function(response) {
                deferred.reject(response);
            })

            return deferred.promise;
        };
    }
})();