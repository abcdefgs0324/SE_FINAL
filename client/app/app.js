'use strict';

var app = angular.module('policeApp', [
    'ngAria',
    'ngAnimate',
    'ngMaterial',
    'ui.router',
    'ngMaterialDatePicker',
]);

var nowUser;
var loginList;

app.config(function () {
        nowUser = null;
        loginList = [{
            username: 'liGG',
            password: '12345',
            cellphone: '110'
        }, {
            username: 'dog',
            password: '12345',
            cellphone: '119'
        }, {
            username: 'apple',
            password: '12345',
            cellphone: '113'
        }];
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
