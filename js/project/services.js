'use strict';

/* Services */

var services = angular.module('glm.services', []);

services.factory('dataFactory', ['$http', function ($http) {
    var urlBase = '../api/person';
    var dataFactory = {};

    //get person by method get at the service in personController
    dataFactory.getPersons = function (email) {
        return $http.get(urlBase + '?email=' + email);
    };

    dataFactory.getPerson = function (id) {
        return $http.get(urlBase + '/' + id);
    };

    dataFactory.getItems = function (category) {
        var urlItems = '../api/menuapi';
        return $http.get(urlItems);
    };

    return dataFactory;
}]);