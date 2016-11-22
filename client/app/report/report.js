'use strict';

angular.module('policeApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('report', {
                templateUrl: 'app/report/report.html',
                controller: 'ReportCtrl'
            });
    });
