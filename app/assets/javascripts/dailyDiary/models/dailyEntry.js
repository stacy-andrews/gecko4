angular.module('gecko')
  .service('dailyEntry', function($q, $http, client, standardFoodSections, exercise, measurements) {

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
        return typeof dailyEntryPrototype.id === 'undefined';
      },
      date: dailyEntryPrototype.date,
      is_work_day: dailyEntryPrototype.is_work_day,
      fromWork: exercise.new(null, dailyEntryPrototype.id),
      toWork: exercise.new(null, dailyEntryPrototype.id),
      sections: standardFoodSections.new(dailyEntryPrototype.id),
      measurements: measurements.new(dailyEntryPrototype.id),

      energySummary: function() {
        return -9660 + 
            -1*this.toWork.energy +
            -1*this.fromWork.energy +
            entry.foodSummary()
      },
      foodSummary: function() {
        return _.reduce(this.sections, function(memo, section) {
              return memo + section.energy();
            } , 0);
      },
      exerciseSummary: function() {
        return 1*this.toWork.energy + 
                1*this.fromWork.energy;
      },
      save: function() {
        var promises = [];

        promises.push(c.save(this));

        if(typeof entry.id != 'undefined') { 
            promises.push(entry.toWork.save());
            promises.push(entry.fromWork.save());
            
            _.each(entry.sections, function(section) {
              promises.push(section.save());
            });

            promises.push(entry.measurements.save());
        }

        return $q.all(promises);
      },
      delete: function() {
        c.delete(this);
      },
      setId: function(newId) {
        this.id = newId;
        
        this.toWork.setDiaryDayId(newId);
        this.fromWork.setDiaryDayId(newId);

        this.measurements.setDiaryDayId(newId);

        _.each(this.sections, function(section) {
          section.setDiaryDayId(newId);
        });
      }
    };

    entry.measurements.get();

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
