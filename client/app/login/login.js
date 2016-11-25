'use strict';

angular.module('policeApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('login', {
                templateUrl: 'app/login/login.html',
                controller: 'LoginCtrl'
            });
    });
