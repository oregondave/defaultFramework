// eventsApp.factory('eventData', function ($http, $log) {
// 	// eventData service has no prepended $ b/c hat is reserved for built-in ngular services - using a prepnded $ may overwrite an existing Angular service
// 	return {
// 		getEvent: function (successcb) {
//                   $http({method: 'GET', url: 'data/event/1.json'}).
//                   success(function (data, status, headers, config) {
//                         successcb(data);
//                   }).
//                   error(function (data, status, headers, config) {
//                         $log.warn(data, status, headers, config);
//                   });
// 		}
// 	};
// });


ecm.factory('topbarData', function ($resource) {
      return {
            getData: function () {
                  return $resource('data/topbar/:id', {id:'@id'}).get({id:'topbar' + '.json'});
            }
      };
});