angular.module("gecko")
       .controller('DailyEntryController', function($scope, $routeParams, $http, dailyEntry) {

  new DiaryDay({
                year: parseInt($routeParams.year), 
                month: parseInt($routeParams.month),
                day: parseInt($routeParams.day)
              })
          .get(function(d) {
            $scope.currentDay = d;
            if($scope.currentDay.isNew()) {
              $scope.save();
            }
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
        var allDays = $http.get('/api/diary_days.json?date=' + day.year + '/' + day.month + '/' + day.day);

        allDays.success(function(data) {

          var currentDate = getTodaysDate();

          var currentDiaryDay = _.find(data, function(diaryDay) {
            return diaryDay.date === currentDate;
          });

          if(currentDiaryDay != null) {
            getCallback(dailyEntry.new(currentDiaryDay));
            return;
          }

          getCallback(dailyEntry.new({ date: currentDate }));
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
             today.getDate();

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