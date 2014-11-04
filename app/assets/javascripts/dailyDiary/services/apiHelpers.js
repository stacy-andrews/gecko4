angular.module('apiHelpers', [])
  .factory('client', function($http) {
    function post(baseUrl, model, modelSetter) {
      var resource = baseUrl + '.json';

      console.log('creating resource - ' + baseUrl);

      var createPromise = $http.post(resource, modelSetter(model));

      createPromise.success(function(successModel) {
        model.id = successModel.id;
        
        if(typeof model.setId != 'undefined') {
          model.setId(successModel.id);
        }
      });

      return createPromise;
    }

    function put(baseUrl, model, modelSetter) {
      var resource = baseUrl + '/' + model.id + '.json';

      console.log('updating resource - ' + resource);

      return $http.put(resource, modelSetter(model));
    }

    function remove(baseurl, model) {
      var resource = baseurl + '/' + model.id + '.json';

      console.log('deleting resource - ' + resource);

      $http.delete(resource);
    }

    return {
      ModelClient : function(baseUrl, modelSetter) {
        return {
          save: function(model) {
            if(isNaN(model.id)) {
              return post(baseUrl, model, modelSetter);
            } 
              
            return put(baseUrl, model, modelSetter);
          },
          delete: function(model) {
            if(!isNaN(model.id)) { 
              remove(baseUrl, model);
            }
          }
        };
      }
    };
  });