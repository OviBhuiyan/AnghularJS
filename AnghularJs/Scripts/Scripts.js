/// <reference path="angular.min.js" />

var myApp = angular
                .module("myModule", [])
                .controller("myController", function ($scope) {

                    var employees = [
                 { name: "Ben", gender: "Male", city: "London" },
                 { name: "Sara", gender: "Female", city: "Chennai"},
                 { name: "Mark", gender: "Male", city: "Chicago" },
                 { name: "Pam", gender: "Female", city: "London" },
                 { name: "Todd", gender: "Male", city: "Chennai" }
                    ];


                    $scope.employees = employees;
                    $scope.employeeView = "EmployeeTable.html"
                   
                  
 });



