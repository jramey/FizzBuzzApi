(function() {
    'use strict';

    angular.module('app', [])
        .config(['$httpProvider', function($httpProvider) {
            $httpProvider.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
            $httpProvider.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET, POST, PATCH, PUT, DELETE, OPTIONS';
            $httpProvider.defaults.headers.common['Access-Control-Allow-Headers'] = 'Origin, Content-Type, X-Auth-Token';
        }]);
})();