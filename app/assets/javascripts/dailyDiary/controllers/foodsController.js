angular.module("gecko").controller('FoodsController', function($scope, $http) {
  $scope.foodCatalogue = [];
  $scope.selectedFood = {};
  var currentCatalogue = [];

  $scope.filterFoodCatalogue = function(typed) {
  	if (typed === '') {
  	 	$scope.foodCatalogue = [];
  		return;
  	}
  	$http
  		.get('/catalogue_foods.json?description=' + typed)
	  	.success(function(data) {
	  		currentCatalogue = data;
	  		$scope.foodCatalogue = _.map(data, function(item) {
	  			return item.description;
	  		});
	  	});
  }
  
  $scope.updateFromFoodCatalogue = function(selectedSuggestion) {
  	var selectedFood = _
  							.find(currentCatalogue, 
  										function(item) {
									  		return item.description === selectedSuggestion;
									  	});

	  if(typeof(selectedFood) !== 'undefined') {
  		$scope.food.unit_energy = selectedFood.unit_energy;
	  }
  	
  }
});