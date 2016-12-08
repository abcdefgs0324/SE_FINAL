'use strict';

angular.module('policeApp')
    .factory('transfer', [ '$state', function ($state) {
        var myself;
        myself = {
            go: function (targetPage) {
                if (angular.isString(targetPage) 
                    && $state.get(targetPage) 
                    && $state.$current.name !== targetPage) {
                    $state.go(targetPage);
                }
            },
        };

        return myself;
}]);
