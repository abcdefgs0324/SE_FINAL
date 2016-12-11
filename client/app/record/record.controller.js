'use strict';

angular.module('policeApp')
    .controller('RecordCtrl', [ '$scope', '$http', 'transfer', function ($scope, $http, transfer) {

        $scope.user = {'id': '11111'};

        $http({
            url: '/userdata',
            method: 'GET',
            data: $scope.user
        })
        .success(function (res) {
            console.log('res:');
            console.log(res);
        })
        .error(function (e) {
            console.log('Error:');
            console.log(e);
        });

        $scope.goApp = function (targetPage) {
            transfer.go(targetPage);
        };

    }]);
