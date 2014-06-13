'use strict';

/* Controllers */

var ctrls = angular.module('vacation.controllers', []);


// Controller for menu lunch
ctrls.controller('ActivityListCtrl', ['$scope', 'dataFactory',
    function ($scope, dataFactory) {
        dataFactory.getActivities()
            .success(function (activities) {
                if (activities) {
                    $scope.activities = activities;
                }
            })
            .error(function (error) {

            });
    }
]);
