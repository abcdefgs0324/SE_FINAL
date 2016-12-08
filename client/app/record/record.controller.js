'use strict';

angular.module('policeApp')
    .controller('RecordCtrl', [ '$scope', 'transfer', function ($scope, transfer) {

        $scope.goApp = function (targetPage) {
            transfer.go(targetPage);
        };

    }]);
