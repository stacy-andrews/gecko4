angular.module("gecko").controller('FoodAttributesController', function($scope, $modalInstance, data) {
	$scope.cancel = function(){
    $modalInstance.dismiss('canceled');  
  };

  
});