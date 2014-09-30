describe('navigation', function() {
	var nav;
	var todaysDate; 

	beforeEach(function() {
		module('gecko');

		inject(function($moment) {
			todaysDate = $moment('2014 09 25', 'YYYY MM DD')
											.startOf('day')
											.valueOf();
		});

		this.clock = sinon.useFakeTimers(todaysDate);
	});

	afterEach(function () { 
		this.clock.restore(); 
	});

	describe('home route', function() {
		beforeEach(inject(function(navigation) {
			nav = navigation.new({
				year: undefined,
				month: undefined,
				day: undefined
			});
		}));

		todaySpecs();
	});

	describe('specific day is today', function() {
		beforeEach(inject(function(navigation) {
			nav = navigation.new({
				year: 2014,
				month: 09,
				day: 25
			});
		}));
		
		todaySpecs();
	});

	function todaySpecs() {
		it('can not do next', function() {
			expect(nav.canDoNext).toEqual(false);
		});

		it('will have an empty next url', function() {
			expect(nav.nextUrl).toEqual('');
		});

		it('will have a previous url to yesterday', function() {
			expect(nav.previousUrl).toEqual('#/2014/09/24');
		});
	}

	describe('specific day is yesterday', function() {
		beforeEach(inject(function(navigation) {
			nav = navigation.new({
				year: 2014,
				month: 09,
				day: 24
			});
		}));

		it('can do next', function() {
			expect(nav.canDoNext).toEqual(true);
		});

		it('will have a previous url to the previous day', function() {
			expect(nav.previousUrl).toEqual('#/2014/09/23');
		});

		it('will have a next url to the home route', function() {
			expect(nav.nextUrl).toEqual('#/');
		});
	});

	describe('specific day not today or yesterday', function() {
		beforeEach(inject(function(navigation) {
			nav = navigation.new({
				year: 2014,
				month: 09,
				day: 12
			});
		}));

		it('can do next', function() {
			expect(nav.canDoNext).toEqual(true);
		});

		it('will have a previous url to the previous day', function() {
			expect(nav.previousUrl).toEqual('#/2014/09/11');
		});

		it('will have a next url to the next day', function() {
			expect(nav.nextUrl).toEqual('#/2014/09/13');
		});
	});
	
});