'use strict';

var proto = angular.module('proto', [
	'ngSanitize',
	'ngResource',
	'ngRoute'
]).


config(['$routeProvider', function($routeProvider, $locationProvider) {
  $routeProvider.when('/home',
  	{
  		templateUrl: 'partials/home/home.html',
  		controller: 'homeController'
  	});

  // $routeProvider.otherwise({redirectTo: '/home'});

}]);