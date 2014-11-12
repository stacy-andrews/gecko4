describe("Food Attributes Controller", function() {
	var controller;
	var scope;

	beforeEach(function() {
		module('gecko');
	});

	beforeEach(inject(function ($rootScope, $controller) {
    scope = $rootScope.$new();
    controller = $controller('FoodAttributesController', {
        '$scope': scope
    });
  }));

  it("should have a controller", function() {
  	expect(controller).toBeDefined();
  })
});