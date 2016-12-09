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
        });

        $scope.goApp = function (targetPage) {
            transfer.go(targetPage);
        };

    }]);
