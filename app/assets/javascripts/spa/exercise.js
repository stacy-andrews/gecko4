angular.module('gecko')
  .factory('exercise', function(client) {

    return {
      new: function(exercisePrototype, diaryDayId) {
        return new Exercise(exercisePrototype, diaryDayId);
      }
    }

  function Exercise(exercisePrototype, diaryDayId) {
    var c = new client.ModelClient('/api/diary_days/' + diaryDayId + '/exercises', 
      function(model) {
      return { exercise: model };
    });

    if(exercisePrototype == null) {
      return {
        Id: NaN,
        energy: null,
        start_time: null,
        duration: null,
        save: function() {
          c.save(this);
        },
        setDiaryDayId: function(diaryDayIdEx) {
          c = new client.ModelClient('/api/diary_days/' + diaryDayIdEx + '/exercises', 
          function(model) {
          return { exercise: model };
            });
        }
      };
    }

    return {
        id: exercisePrototype.id,
        energy: exercisePrototype.energy,
        start_time: new Date(exercisePrototype.start_time),
        duration: exercisePrototype.duration,
        save: function() {
          c.save(this);
        },
        setDiaryDayId: function(diaryDayIdEx) {
          c = new client.ModelClient('/api/diary_days/' + diaryDayIdEx + '/exercises', 
          function(model) {
          return { exercise: model };
            });
        }
      };
  }
});