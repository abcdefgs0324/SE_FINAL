'use strict';

angular.module('policeApp')
    .controller('ReportCtrl', [ '$scope', 'transfer', function ($scope, transfer) {

        $scope.goApp = function (targetPage) {
            transfer.go(targetPage);
        };

    }]);
