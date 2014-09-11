angular.module("gecko").directive('foodSection', function() {
  return {
    restrict: 'E',
    templateUrl: 'foodSection.html',
    scope: {
      section: '=section'
    }
  };
});