'use strict';

angular.module('policeApp')
    .factory('dialog', [ '$mdDialog', function ($mdDialog) {
        var myself;
        myself = {
            confirm: function (title, text, ev) {
                //$mdDialog.show(
                var obj = $mdDialog.confirm()
                        .title(title)
                        .textContent(text)
                        .ariaLabel(title)
                        .targetEvent(ev)
                        .ok('YES')
                        .cancel('CANCEL');
                return $mdDialog.show(obj);
                //);
            },
            alert: function (title, text, ev) {
                $mdDialog.show(
                    $mdDialog.alert()
                        .title(title)
                        .textContent(text)
                        .ariaLabel(title)
                        .ok('OK')
                        .targetEvent(ev)
                );
            },
        };

        return myself;
}]);
