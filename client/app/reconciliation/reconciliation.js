'use strict';

angular.module('policeApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('reconciliation', {
                templateUrl: 'app/reconciliation/reconciliation.html',
                controller: 'ReconciliationCtrl'
            });
    });
