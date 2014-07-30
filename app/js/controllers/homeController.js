"use strict";

proto.controller('homeController',
	function homeController($scope, homeData) {

		$scope.home = homeData.getData();

	}
);