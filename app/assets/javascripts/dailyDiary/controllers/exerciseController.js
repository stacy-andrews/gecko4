angular.module("gecko").controller('ExerciseController', function($scope) {
  $scope.convert = function() {
    $scope.exercise.energy = $scope.exercise.energy * 4.184;
  };
});