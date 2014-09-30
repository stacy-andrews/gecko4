angular.module('gecko')
  .service('navigation', function($moment) { 

  return {
  	new: function(day) {
  		return new Navigation(day);
  	}
  }

  function Navigation(day) {
  	var currentDate = new AwareDate(getCurrentDay(day));

    if(currentDate.isToday()) {
      return { 
        canDoNext: false,
        nextUrl: '',
        previousUrl: buildUrl(currentDate.yesterday()), 
      };
    }

    if(currentDate.isYesterday()) {
      return { 
        canDoNext: true,
        nextUrl: '#/',
        previousUrl: buildUrl(currentDate.yesterday()), 
      };
    }

    return { 
      canDoNext: true,
      nextUrl: buildUrl(currentDate.tomorrow()),
      previousUrl: buildUrl(currentDate.yesterday()), 
    };
  }

  function buildUrl(date) {
  	return '#/' + date.format('YYYY/MM/DD');
  }

  function getCurrentDay(day) {
  	if (!isNaN(day.year)) {
      return $moment(day.year + ' ' + day.month + ' ' + day.day, 
                     'YYYY MM DD');
    }

    return $moment();
  }

  function AwareDate(dateForAwareNess) {
    var dayValue = dateForAwareNess
                      .startOf('day')
                      .valueOf();
    var today = $moment().startOf('day');
    
    return {
      isToday: function() {
        return today.valueOf() === dayValue;
      },
      
      isYesterday: function() {
        return today.subtract(1, 'day').valueOf() === dayValue;
      },

      yesterday: function() {
        return $moment(dateForAwareNess).subtract(1, 'days');
      },
      tomorrow: function() {
        return $moment(dateForAwareNess).add(1, 'days');
      }
    };
  }
});