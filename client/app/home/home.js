'use strict';

angular.module('policeApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('home', {
                templateUrl: 'app/home/home.html',
                controller: 'HomeCtrl'
            });
    });
