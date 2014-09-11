angular.module("gecko")
       .controller('DailyEntryController', function($scope, $routeParams, $http, dailyEntry) {

  new DiaryDay({
                year: parseInt($routeParams.year), 
                month: parseInt($routeParams.month),
                day: parseInt($routeParams.day)
              })
          .get(function(d) {
            $scope.currentDay = d;
          });

  $scope.save = function() {
    $scope.currentDay.save();
  };

  $scope.delete = function() {
    $scope.currentDay.delete();
  };

  function DiaryDay(day) {
    return {
      get: function(getCallback) {
        var currentDate = getTodaysDate();

        var allDays = $http.get('/api/diary_days/' + currentDate + '.json');

        allDays
        .success(function(data) {
          getCallback(dailyEntry.new(data));
        })
        .error(function(data, status, headers, config) {
          if(status === 404) {
            var newDay = dailyEntry.new({ date: currentDate });
            newDay.save();
            getCallback(newDay);
          }
        });
      }
    };

    function getTodaysDate() {
      if(!isNaN(day.year)) {
        return day.year + '-' +
                getMonth(day.month) + '-' + 
              getDay(day.day);
      }

      var today = new Date();

      return today.getFullYear() + '-' + 
             getMonth(today.getMonth()+1) + '-' + 
             getDay(today.getDate());

      function getMonth(month) {
        if(month <= 9) {
          return '0' + month;
        }

        return month;
      }

      function getDay(day) {
        if(day <= 9) {
          return '0' + day;
        }

        return day;
      }
    }
  }
});