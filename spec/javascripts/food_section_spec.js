describe("Food Section", function() {
	var section;

	beforeEach(function() {
		module('gecko');

		inject(function($moment) {
			todaysDate = $moment('2014 09 27', 'YYYY MM DD')
											.startOf('day')
											.valueOf();
		});

		this.clock = sinon.useFakeTimers(todaysDate);
	});

	describe("new section", function() {

		beforeEach(function() {
			inject(function(foodSection) {
				section = foodSection.new(undefined, 'test section');

			});
		});

		it("should have the section name", function() {
			expect(section.name).toEqual('test section');
		});

		describe("adding a food", function() {
			var newFood;

			beforeEach(function() {
				section.new();

				newFood = section.foods[0];
			});

			it("should have a new food in the section", function() {
				expect(section.foods.length).toEqual(1);
			});

			it("the new food should have the current time", function() {
				expect(newFood.start_time).toEqual(new Date());
			});

			it("the new food should be associated with the section", function() {
				expect(newFood.section).toEqual('test section');
			});

			it("should have focus", function() {
				expect(newFood.hasFocus).toEqual(true);
			});
			
		});

	});

	describe("existing section with saved food", function() {
		var foods;

		beforeEach(function() {
			inject(function($httpBackend, foodSection, $moment) {

      	$httpBackend
      		.when('GET', '/api/diary_days/20/foods.json')
					.respond([{
						id: 1,
						section: 'test section with data',
						start_time: $moment('2014 09 27 10 30', 
																'YYYY MM DD hh mm').valueOf()
						}, 
						{
						id: 2,
						section: 'test section with data',
						start_time: $moment('2014 09 27 08 30', 
																'YYYY MM DD hh mm').valueOf()
						}, 
						{
						section: 'test section'
						}], {});

				section = foodSection.new(20, 'test section with data');

				$httpBackend.flush();

				foods = section.foods;
			});
		});

		it("should have the section name", function() {
			expect(section.name).toEqual('test section with data');
		});

		it("should have all foods for the diary day for the section", function() {
			expect(foods.length).toEqual(2);
		});

		it("all foods should be in time entry order", function() {
			expect(foods[0].id).toEqual(2);
			expect(foods[1].id).toEqual(1);
		});

		describe("adding a food", function() {
			var newFood;

			beforeEach(function() {
				section.new();

				newFood = section.foods[2];
			});

			it("should have a new food in the section", function() {
				expect(section.foods.length).toEqual(3);
			});

			it("the new food should have the current time", function() {
				expect(newFood.start_time).toEqual(new Date());
			});

			it("the new food should be associated with the section", function() {
				expect(newFood.section).toEqual('test section with data');
			});

			it("the new food should have focus", function() {
				expect(newFood.hasFocus).toEqual(true);
			});

			it("all foods other than new will not have focus", function() {
				_(foods)
					.each(function(food, index) {
						if(!isLast()) {
							expect(food.hasFocus).toEqual(false);
						}

						function isLast() {
							return index === foods.length - 1;
						}
					});
			});
		});
	});

	afterEach(function () { 
		this.clock.restore(); 
	});
});