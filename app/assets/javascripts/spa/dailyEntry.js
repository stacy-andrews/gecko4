angular.module('gecko')
  .factory('dailyEntry', function($http, client, standardFoodSections, exercise) {

    var apiPrefix = '/api/diary_days';

  return {
    new: function(dailyEntryPrototype) {
      return new DailyEntry(dailyEntryPrototype);
    }
  };

  function DailyEntry(dailyEntryPrototype) {
    var c = new client.ModelClient(apiPrefix, 
      function(model) {
      return { diary_day : model };
    });

    var entry = {
      id: dailyEntryPrototype.id,
      isNew: function() {
        return typeof dailyEntryPrototype.id == 'undefined';
      },
      date: dailyEntryPrototype.date,
      is_work_day: dailyEntryPrototype.is_,
      fromWork: exercise.new(null, dailyEntryPrototype.id),
      toWork: exercise.new(null, dailyEntryPrototype.id),
      sections: standardFoodSections.new(dailyEntryPrototype.id),
      energySummary: function() {
        return -8000 + 
            -1*this.toWork.energy +
            -1*this.fromWork.energy +
            _.reduce(this.sections, function(memo, section) {
              return memo + section.energy();
            } , 0);
      },
      save: function() {
        c.save(this);

        if(typeof this.id != 'undefined') { 
          this.toWork.save();
          this.fromWork.save();
          _.each(this.sections, function(section) {
            section.save();
          });
        }
      },
      delete: function() {
        c.delete(this);
      },
      setId: function(newId) {
        this.id = newId;
        this.toWork.setDiaryDayId(newId);
        this.fromWork.setDiaryDayId(newId);

        _.each(this.sections, function(section) {
          section.setDiaryDayId(newId);
        });
      }
    };

    if(typeof dailyEntryPrototype.id != 'undefined') {
      var exercisesPromise = $http.get(apiPrefix + '/' + dailyEntryPrototype.id + '/exercises.json');

      exercisesPromise.success(function(data) {
        var sorted = _.sortBy(data, function(a) {
                              return -1 * (new Date(a.start_time).getTime());
                            });

        entry.fromWork = exercise.new(sorted[0], dailyEntryPrototype.id);
        entry.toWork = exercise.new(sorted[1], dailyEntryPrototype.id);
      });
    }

    return entry;
  }

  
});
