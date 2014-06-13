'use strict';

/* Controllers */

var ctrls = angular.module('vacation.controllers', []);


// Controller for menu lunch
ctrls.controller('ActivityListCtrl', ['$scope', 'dataFactory',
    function ($scope, dataFactory) {
    	
    }
]);


ctrls.controller('ActivityCtrl', ['$scope', '$routeParams',
	function($scope, $routeParams) {
		var id = $routeParams.id;
		angular.forEach($scope.activities, function(activity, index){
            if (activity.activityId == id) {
                $scope.activity = activity;
            }
        });
	}]);