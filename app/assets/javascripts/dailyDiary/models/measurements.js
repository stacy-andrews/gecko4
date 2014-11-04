angular.module('gecko')
  .factory('measurements', function(client, $http) {
  	return {
  		new: function(diaryDayId) {
  			return new Measurements(diaryDayId)
  		}
  	};

	function Measurements(diaryDayId) {
		var c = new client.ModelClient('/api/diary_days/' + diaryDayId + '/measurements', 
      function(model) {
      return { measurements: model };
    });

		var measurements = {
			diaryDayId: diaryDayId
		};

		measurements.get = function() {
      return $http
	      				.get('/api/diary_days/' + diaryDayId + '/measurements.json')
	      				.success(function(data) {
	      					measurements.chest = data.chest;
	      					measurements.stomach = data.stomach;
	      					measurements.thigh = data.thigh;
      					});
		};

		measurements.save = function() {
      return c.save(measurements);
		};

    measurements.setDiaryDayId = function(diaryDayIdEx) {
      c = new client.ModelClient('/api/diary_days/' + diaryDayIdEx + '/measurements', 
      function(model) {
      return { measurements: model };
      });
    };
		
		return measurements;
	}
});