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
var addressList;

app.config(function () {
        nowUser = null;
        addressList = [
            '0x8a71ebbe98b7b95438d80e2e78bed006ba5fad30',
            '0xbadcbce46319e1490cdafab47afd9c27d95272a6',
            '0x6a561dd578ed2349ed3cc9e7476845fd6afad402',
            '0x889f86ce80a7e80e8ccce6bd8ffc9588b50cb3ca',
            '0x443172501c4768648b1bc184721d7d9fc2425e79'
        ];
        loginList = [{
            username: 'liGG',
            password: '12345',
            cellphone: '110',
            address: addressList[0]
        }, {
            username: 'dog',
            password: '12345',
            cellphone: '119',
            address: addressList[1]
        }, {
            username: 'apple',
            password: '12345',
            cellphone: '113',
            address: addressList[2]
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
