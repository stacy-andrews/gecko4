describe("Food Attributes Controller", function() {
	var controller;
	var scope;
	var modalInstance;

	beforeEach(function() {
		module('gecko');
	});

	beforeEach(inject(function ($rootScope, $controller) {
    scope = $rootScope.$new();
    modalInstance = {
    	dismiss: function() {},
    	close: function() {}
    };

    // controller = $controller('FoodAttributesController', {
    //     $scope: scope,
    //     $modalInstance: modalInstance,
    //     data: {}
    // });
  }));

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