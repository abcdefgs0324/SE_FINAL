/*global loginList:true*/
/*global addressList:true*/
/*global nowUser:true*/

'use strict';

angular.module('policeApp')
    .controller('SignupCtrl', [ '$scope', 'transfer', 'dialog', function ($scope, transfer, dialog) {

        $scope.signup = function () {
            var isNew = true;
            for (var index in loginList) {
                if (loginList[index].username === $scope.newUsername) {
                    isNew = false;
                }
            }
            if (isNew === true) {
                var newUser = {
                    username: $scope.newUsername,
                    password: $scope.newPassword,
                    cellphone: $scope.newPhone,
                    address: addressList[loginList.length]
                };
                nowUser = $scope.username;
                console.log('Success: create a new user');
                console.log(newUser);
                loginList.push(newUser);
                $scope.goApp('home');
            } else {
                dialog.alert('Failed', 'This user name already exists');
                console.log('Error: user name exists already');
            }
        };

        $scope.goApp = function (targetPage) {
            transfer.go(targetPage);
        };

    }]);
