proto.factory('homeData', function ($resource) {
      return {
            getData: function () {
                  return $resource('data/home/:id', {id:'@id'}).get({id:'home' + '.json'});
            }
      };
});