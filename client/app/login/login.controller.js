/*global loginList*/
/*global nowUser*/

'use strict';

angular.module('policeApp')
    .controller('LoginCtrl', [ '$scope', 'transfer', 'dialog', function ($scope, transfer, dialog) {

        $scope.login = function () {
            var loginSuccess = false;
            for (var index in loginList) {
                if ($scope.username === loginList[index].username && 
                    $scope.password === loginList[index].password) {
                    nowUser = $scope.username;
                    console.log('Success: log in with ' + nowUser);
                    loginSuccess = true;
                    $scope.goApp('home');
                }
            }
            if (loginSuccess == false) {
                dialog.alert('Failed', 'User ' + $scope.username + ' not exists or password is wrong');
                console.log('Error: there is not the user ' + $scope.username);
            }
        };

        $scope.goApp = function (targetPage) {
            transfer.go(targetPage);
        };

    }]);
