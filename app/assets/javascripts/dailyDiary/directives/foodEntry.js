angular.module("gecko").directive('foodEntry', function() {
  return {
    restrict: 'E',
    templateUrl: 'foodEntry.html',
    scope: {
      food: '=',
      section: '='
    },
    controller: 'FoodsController',
    replace: true
  };
}); 