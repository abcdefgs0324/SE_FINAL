/*global nowUser:true*/

'use strict';

angular.module('policeApp')
    .controller('HomeCtrl', [ '$scope', 'transfer', 'dialog', function ($scope, transfer, dialog) {

        $scope.homeItems = [{
            title: '筆錄紀錄',
            description: '查看先前筆錄紀錄',
            destination: 'record',
            disabled: false
        }, {
            title: '做筆錄',
            description: '立即做筆錄',
            destination: 'report',
            disabled: false
        }];

        $scope.logout = function () {
            dialog.confirm('CONFIRM', 'Do you want to log out?')
                .then(function () {
                    nowUser = null;
                    console.log('Success: logout');
                    $scope.goApp('login');
                });
        };

        $scope.goApp = function (targetPage) {
            transfer.go(targetPage);
        };

        /*
         * TODO
         *  if no record before, $scope.homeItems[0].disabled = true;
         */

    }]);
