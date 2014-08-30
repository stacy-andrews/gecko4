angular.module("gecko").directive('food', function() {
  return {
    restrict: 'E',
    templateUrl: 'food.html',
    scope: {
      section: '=section'
    }
  };
})