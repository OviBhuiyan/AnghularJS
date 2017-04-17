/// <reference path="angular.min.js" />

var myApp = angular
                .module("myModule", [])
                .controller("myController", function ($scope, $http) {

                    var successCallBack = function (response) {
                        $scope.employees = response.data;
                    };

                    var errorCallBack = function (response) {
                        $scope.error = response.data;
                    };

                    $http({
                        method: 'GET',
                        url: 'EmployeeWebService.asmx/GetAllEmployee'
                    })
                          .then(successCallBack, errorCallBack);
                            

                });



