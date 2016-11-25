'use strict';

angular.module('policeApp')
    .controller('ReconciliationCtrl', [ '$scope', 'transfer', function ($scope, transfer) {

        $scope.goApp = function (targetPage) {
            transfer.go(targetPage);
        };

    }]);
