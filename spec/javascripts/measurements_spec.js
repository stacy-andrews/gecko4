describe("Measurements", function() {
	var meas;

	beforeEach(function() {
		module('gecko');
	});

	describe("Measurements for existing diary day", function() {
		beforeEach(function() {
			inject(function(measurements) {
				meas = measurements.new(189);
			});
		});

		describe("Get measurements for a day with no measurements on the server", function() {
			beforeEach(inject(function($httpBackend) {
				$httpBackend
				 	.when('GET', '/api/diary_days/189/measurements.json')
					.respond(404, '');

				meas.get();

				$httpBackend.flush();
			}));

			it("should have empty chest value", function() {
				expect(meas.chest).toBeUndefined();
			});

			it("should have empty stomach value", function() {
				expect(meas.stomach).toBeUndefined();
			});

			it("should have empty thigh value", function() {
				expect(meas.thigh).toBeUndefined();
			});
		});

		describe("Get an existing measurement", function() {
			var serverMeasurements = {
							id: 457,
							chest: 102,
							stomach: 85,
							thigh: 45
						};

			beforeEach(inject(function($httpBackend) {
				$httpBackend
				 	.when('GET', '/api/diary_days/189/measurements.json')
					.respond(serverMeasurements);

				meas.get();

				$httpBackend.flush();
			}));

			it("should have the server chest value", function() {
				expect(meas.chest).toEqual(serverMeasurements.chest);
			});

			it("should have the server stomach value", function() {
				expect(meas.stomach).toEqual(serverMeasurements.stomach);
			});

			it("should have the server thigh value", function() {
				expect(meas.thigh).toEqual(serverMeasurements.thigh);
			});
		});	

		describe("Saving an existing measurement", function() {
			var savePromise;
			var putData;

			beforeEach(inject(function($httpBackend) {
				meas.id = 234;

				$httpBackend
					.when('PUT', '/api/diary_days/189/measurements/234.json', function(putValue) { 
						putData = angular.fromJson(putValue);
						return true;
					})
					.respond(function() {
						return putData;
					})

				meas.stomach = 87;
				meas.chest = 104;
				meas.thigh = 47;

				savePromise = meas.save();

				$httpBackend.flush();
			}));

			it("should have a promise for the save", function() {
				expect(savePromise).toBeDefined();
			});

			it("should save the new stomach value", function() {
				expect(putData.measurements.stomach).toEqual(87);
			});

			it("should save the new chest value", function() {
				expect(putData.measurements.chest).toEqual(104);
			});

			it("should save the new thigh value", function() {
				expect(putData.measurements.thigh).toEqual(47);
			});

		});

		describe("Saving new measurements", function() {
			var savePromise;
			var postData;

			beforeEach(inject(function($httpBackend) {
				meas.id = undefined;

				$httpBackend
					.when('POST', '/api/diary_days/189/measurements.json', function(putValue) { 
						postData = angular.fromJson(putValue);

						return true;
					})
					.respond(200, { id: 9684, stomach: 87, chest: 104, thigh: 47 });

				meas.stomach = 87;
				meas.chest = 104;
				meas.thigh = 47;

				savePromise = meas.save();

				$httpBackend.flush();
			}));

			it("should have a promise for the save", function() {
				expect(savePromise).toBeDefined();
			});

			it("should save the new stomach value", function() {
				expect(postData.measurements.stomach).toEqual(87);
			});

			it("should save the new chest value", function() {
				expect(postData.measurements.chest).toEqual(104);
			});

			it("should save the new thigh value", function() {
				expect(postData.measurements.thigh).toEqual(47);
			});

			it("should set the id of the measurement", function() {
				expect(meas.id).toEqual(9684)
			});
		});
	});

	describe("Measurements for new diary day", function() {});
		beforeEach(function() {
			inject(function(measurements) {
				meas = measurements.new(undefined);
			});
		});

		describe("setting diary day id", function() {
			beforeEach(function() {
				meas.setDiaryDayId(456);
			});

			it("should now have a diary day id", function() {
				
			});
		});
	});