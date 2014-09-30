
var app = angular.module("gecko", 
  ['ui.bootstrap', 
  'templates', 
  'apiHelpers', 
  'angular-lodash', 
  'ngRoute', 
  'autocomplete']);

app.config(['$routeProvider', function($routeProvider) { 
  $routeProvider
    .when('/', {
      templateUrl: 'dailyEntry.html',
      controller: 'DailyEntryController'
    })
    .when('/:year/:month/:day', {
      templateUrl: 'dailyEntry.html',
      controller: 'DailyEntryController'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);

app.constant('$moment', moment);

angular.module("gecko").controller('PagerController', function($scope) {
  $scope.forward = function() {
    alert('forward - todo');
  };
  $scope.backward = function() {
    alert('backward - todo');
  };
});
