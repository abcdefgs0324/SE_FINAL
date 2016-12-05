'use strict';

angular.module('policeApp')
    .controller('SignupCtrl', [ '$scope', 'transfer', function ($scope, transfer) {
        $scope.logging = false;

        $scope.goApp = function (targetPage) {
            transfer.go(targetPage);
        };

    }]);
