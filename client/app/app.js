'use strict';

var app = angular.module('policeApp', [
    'ngAria',
    'ngAnimate',
    'ngMaterial',
    'ui.router',
    'ngMaterialDatePicker',
]);

app.config(function () {
    })
    .directive('banner', function () {
        return {
            template: '<div>Hi</div>' +
                        '<div> Test Test</div>' +
                      '<div>Thanks</div>'
        };
    })
    .run(function (transfer) {
        transfer.go('login');
    });
