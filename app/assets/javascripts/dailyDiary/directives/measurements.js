angular.module("gecko").directive('measurements', function() {
  return {
    restrict: 'E',
    templateUrl: 'measurements.html',
    scope: {
      measurements: '=',
    }
  };
})