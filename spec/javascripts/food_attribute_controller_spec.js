describe("Food Attributes Controller", function() {
	var controller;
	var scope;
	var modalInstance;

	beforeEach(function() {
		module('gecko');
	});

	beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
    modalInstance = {
    	dismiss: function() {},
    	close: function() {}
    };
  }));

	describe("opening a dialog with no attributes", function() {
		beforeEach(inject(function($controller) {
			controller = $controller('FoodAttributesController', {
	        $scope: scope,
	        $modalInstance: modalInstance,
	        data: {}
	    });
		}));

		it("should have no caffeine", function() {
			expect(scope.foodAttributes.caffeine).toBeUndefined();
		});
	});

	describe("opening a dialog with food attributes", function() {
		beforeEach(inject(function($controller) {
			controller = $controller('FoodAttributesController', {
	        $scope: scope,
	        $modalInstance: modalInstance,
	        data: { caffeine: 596 }
	    });
		}));

		it("should have caffeine", function() {
			expect(scope.foodAttributes.caffeine).toEqual(596);
		});
	});

  describe("opened dialog", function() {
  	beforeEach(inject(function ($controller) {
	    controller = $controller('FoodAttributesController', {
	        $scope: scope,
	        $modalInstance: modalInstance,
	        data: {}
	    });
	  }));

	  describe("canceling the dialog", function() {
	  	beforeEach(function() {
	  		sinon.spy(modalInstance, 'dismiss');
	  		scope.cancel();
	  	});

	  	it("should dismiss via the modal instance", function() {
	  		expect(modalInstance.dismiss.calledOnce).toBeTruthy();
	  	});
	  });

	  describe("confirming the dialog after entering a caffeine value", function() {
	  	beforeEach(function() {
	  		scope.foodAttributes.caffeine = 456;

	  		sinon.spy(modalInstance, 'close');
	  		scope.ok();
	  	});

	  	it("should pass the caffeine value back", function() {
	  		expect(modalInstance.close.args[0][0].caffeine).toEqual(456);
	  	});
	  });
  });


});