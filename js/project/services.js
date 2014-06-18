'use strict';

/* Services */

var services = angular.module('vacation.services', []);

services.factory('dataFactory', ['$http', function ($http) {
    var JsonList = '../../inbox.json';
    var dataFactory = {};

    //get person by method get at the service in personController
    dataFactory.getActivities = function () {
        return $http.get(JsonList);
    };

    dataFactory.getActivityById = function (id) {
        var urlActivity = '../../activity';
        return $http.get(urlActivity+id+'.json');
    };

    return dataFactory;
}]);