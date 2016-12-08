'use strict';

angular.module('policeApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('signup', {
                templateUrl: 'app/signup/signup.html',
                controller: 'SignupCtrl'
            });
    });
