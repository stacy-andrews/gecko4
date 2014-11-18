describe("Foods Controller", function() {
	var controller;
	var scope;

	beforeEach(function() {
		module('gecko');
	});

	beforeEach(inject(function ($rootScope, $controller, $httpBackend) {
    scope = $rootScope.$new();
  
    controller = $controller('FoodsController', { 
    	'$scope': scope
    });
  }));

	it("should have an empty food catalogue", function() {
		expect(scope.foodCatalogue.length).toEqual(0);
	});

	describe("when filtering where the suggestion is empty", function() {
		beforeEach(function() {
			scope.filterFoodCatalogue('');
		});

		it("should have no food catalogue items", function() {
			expect(scope.foodCatalogue.length).toEqual(0);
		});
	});

	describe("when filtering where a suggestion is not found", function() {
		beforeEach(inject(function($httpBackend) {
			$httpBackend
				 	.when('GET', '/catalogue_foods.json?description=food1')
					.respond([]);
				}));

		it("should have no suggestion descriptions", function() {
			expect(scope.foodCatalogue.length).toEqual(0);
		});
	});

	describe("when filtering where a suggestion is found", function() {
		beforeEach(inject(function($httpBackend) {
			$httpBackend
				 	.when('GET', '/catalogue_foods.json?description=food1')
					.respond([ { 
												description: 'food1', 
												unit_energy: 467, 
												caffeine: 93 } 
												]);

			scope.filterFoodCatalogue('food1');

			$httpBackend.flush();
		}));

		it("should show the description of all of the matching suggestions", function() {
			expect(scope.foodCatalogue.length).toEqual(1);
		});

		describe("when a suggestion is selected", function() {
			beforeEach(function() {
				scope.food = {};

				scope.foodCatalogue = 
				scope.updateFromFoodCatalogue('food1');
			});

			it("should set the caffeine for the food from the suggestion", function() {
				expect(scope.food.caffeine).toEqual(93);
			});

			it("should set the unit energy for the food from the suggestion", function() {
				expect(scope.food.unit_energy).toEqual(467);
			});
		});
	}); 


});	