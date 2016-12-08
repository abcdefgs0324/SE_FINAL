'use strict';

angular.module('policeApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('record', {
                templateUrl: 'app/record/record.html',
                controller: 'RecordCtrl'
            });
    });
