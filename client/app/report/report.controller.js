'use strict';

angular.module('policeApp')
    .controller('ReportCtrl', [ '$scope', 'transfer', function ($scope, transfer) {

        $scope.tabSelected = 0;
        $scope.twoDisabled = true;
        $scope.threeDisabled = true;
        $scope.fourDisabled = true;
        $scope.date = new Date();

        $scope.stepOne = function() {
            $scope.tabSelected = 0;
        };

        $scope.stepTwo = function() {
            $scope.tabSelected = 1;
            $scope.twoDisabled = false;
        };

        $scope.stepThree = function() {
            $scope.tabSelected = 2;
            $scope.threeDisabled = false;
        };

        $scope.stepFour = function() {
            $scope.tabSelected = 3;
            $scope.fourDisabled = false;
        };

        $scope.goApp = function (targetPage) {
            transfer.go(targetPage);
        };

    }]);
