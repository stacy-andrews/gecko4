
var app = angular.module("gecko", ['ui.bootstrap', 'templates', 'apiHelpers', 'angular-lodash', 'ngRoute']);

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


angular.module("gecko").controller('ExerciseController', function($scope) {
  $scope.convert = function() {
    $scope.exercise.energy = $scope.exercise.energy * 4.184;
  };
});

angular.module("gecko").controller('PagerController', function($scope) {
  $scope.forward = function() {
    alert('forward - todo');
  };
  $scope.backward = function() {
    alert('backward - todo');
  };
});

angular.module("gecko").directive('exercise', function() {
  return {
    restrict: 'E',
    templateUrl: 'exercise.html',
    scope: {
      exercise: '=info',
      
    }
  };
})

angular.module("gecko").directive('food', function() {
  return {
    restrict: 'E',
    templateUrl: 'food.html',
    scope: {
      section: '=section'
    }
  };
})


