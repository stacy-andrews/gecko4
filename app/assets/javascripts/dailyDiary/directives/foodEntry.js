angular.module("gecko").directive('foodEntry', function() {
  return {
    restrict: 'E',
    templateUrl: 'foodEntry.html',
    scope: {
      food: '=food',
      section: '=section'
    },
    controller: 'FoodsController'
  };
});