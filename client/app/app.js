'use strict';

var app = angular.module('policeApp', [
    'ngAria',
    'ngAnimate',
    'ngMaterial',
    'ui.router',
    'ngMaterialDatePicker',
]);
var PATHNAME = window.location.pathname;

app.config(function ($stateProvider) {
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
