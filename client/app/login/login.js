'use strict';

angular.module('policeApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('login', {
                templateUrl: 'app/login/login.html',
                controller: 'LoginCtrl',
                    xtemplateProvider: function ($timeout, transfer) {
                        return $timeout(function () {
                            return transfer.go('app/login/login.html', $timeout);
                        }, 100);
                    }
            });
    });
