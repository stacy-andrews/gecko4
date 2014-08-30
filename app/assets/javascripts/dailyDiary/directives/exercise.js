angular.module("gecko").directive('exercise', function() {
  return {
    restrict: 'E',
    templateUrl: 'exercise.html',
    scope: {
      exercise: '=info',
      
    }
  };
})