'use strict';

angular.module('policeApp')
    .controller('LoginCtrl', [ '$scope', 'transfer', function ($scope, transfer) {

        $scope.goApp = function (targetPage) {
            transfer.go(targetPage);
        };

    }]);
