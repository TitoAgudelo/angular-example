"use strict";

var app = angular.module('vacation', [
		'ngRoute',
		'vacation.controllers',
		'vacation.services'
	]);

app.config(["$routeProvider", function ($routeProvider) {
	$routeProvider
		.when("/list", {controller: "ActivityListCtrl", templateUrl: "partials/activity_list.html"})
		.when("/activity/:id", {controller: "ActivityCtrl", templateUrl: "partials/activity_detail.html"})
    	.otherwise({redirectTo: "/"})
}])