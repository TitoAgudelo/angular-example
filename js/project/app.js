"use strict";

var app = angular.module('vacation', [
		'ngRoute',
		'vacation.controllers',
		'vacation.services'
	]);

app.config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
	$routeProvider
		.when("/", {
    		templateUrl: "/partials/home.html"
		})
		.when("/list", {
			controller: "ActivityListCtrl",
			templateUrl: "/partials/activity_list.html"
		})
		.when("/activity/:id", {
			controller: "ActivityCtrl",
			templateUrl: "/partials/activity_detail.html"
		})
    	.otherwise({
    		redirectTo: "/"
    	});

    $locationProvider.html5Mode(true);
}]);

app.run(['$rootScope', '$http',
	function($rootScope, $http) {
			var jsonList = '/stubs/inbox.json';
         	$http.get(jsonList).success(function(data){
     			$rootScope.activities = data;
         	});
		}
	]);
