angular.module("gecko").controller('FoodAttributesController', function($scope, $modalInstance, data) {
	$scope.foodAttributes = {
		caffeine: data.caffeine
	};

	$scope.cancel = function(){
    $modalInstance.dismiss();  
  };

	$scope.ok = function(){
  	$modalInstance.close($scope.foodAttributes);
	};
});