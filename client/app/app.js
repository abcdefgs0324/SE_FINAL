'use strict';

var app = angular.module('policeApp', [
    'ui.router',
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
    });
