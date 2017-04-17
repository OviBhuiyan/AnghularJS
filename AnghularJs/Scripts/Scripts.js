/// <reference path="angular.min.js" />

var myApp = angular
                .module("myModule", [])
                .controller("myController", function ($scope, $http) {

                    $http.get("EmployeeWebService.asmx/GetAllEmployee")
                            .then(function (response) {
                                $scope.employees = response.data;
                            });

                });



