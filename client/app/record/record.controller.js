/*global nowUser:true*/

'use strict';

angular.module('policeApp')
    .controller('RecordCtrl', [ '$scope', '$http', 'transfer', function ($scope, $http, transfer) {

        $scope.settings = null;

        $scope.getData = function () {
            $http({
                url: '/userdata',
                method: 'POST',
                data: nowUser
            })
            .success(function (res) {
                console.log('res:');
                console.log(res);
                $scope.settings = res;
            })
            .error(function (e) {
                console.log('Error:');
                console.log(e);
            });
        };

        $scope.getData();

        $scope.goApp = function (targetPage) {
            transfer.go(targetPage);
        };

    }]);
