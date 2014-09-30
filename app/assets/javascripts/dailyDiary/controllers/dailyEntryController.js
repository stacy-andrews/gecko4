angular.module("gecko")
       .controller('DailyEntryController', function($q, $scope, $routeParams, $http, dailyEntry, navigation) {

  var current = {
                year: parseInt($routeParams.year), 
                month: parseInt($routeParams.month),
                day: parseInt($routeParams.day)
              };

  $scope.status = {
    isLoading: false
  };

  $scope.navigation = navigation.new(current);

  new DiaryDay(current)
          .get(function(d) {
            $scope.currentDay = d;
          });

  $scope.save = function() {
    $scope.status.isLoading = true;
    
    $scope.currentDay
          .save()
          .finally(function() {
            $scope.status.isLoading = false;
          }); 
  };

  $scope.delete = function() {
    $scope.currentDay.delete();
  };

  $scope.previousDay = function() {
    $scope.navigation.previous();
  }

  function DiaryDay(day) {
    return {
      get: function(getCallback) {
        var deferred = $q.defer();

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

        return deferred.promise;
      }
    };

    function asyncGreet(name) {
      var deferred = $q.defer();

      setTimeout(function() {
        deferred.notify('About to greet ' + name + '.');

        if (okToGreet(name)) {
          deferred.resolve('Hello, ' + name + '!');
        } else {
          deferred.reject('Greeting ' + name + ' is not allowed.');
        }
      }, 1000);

      return deferred.promise;
    }

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