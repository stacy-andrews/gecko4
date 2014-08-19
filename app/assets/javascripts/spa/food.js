angular.module('gecko')
  .factory('food', function(client) {

    return {
      new: function(settings, diaryDayId) {
        return new Food(settings, diaryDayId);
      }
    };

  function Food(settings, diaryDayId) {
    var c = new client.ModelClient('/api/diary_days/' + diaryDayId + '/foods', 
      function(model) {
      return { food: model };
    });

    var food = {
      id: settings.id,
      description: settings.description,
      start_time: new Date(settings.start_time),
      unit_energy: settings.unit_energy,
      quantity: settings.quantity,
      section: settings.section
    };

    food.totalEnergy = function () {
      return food.unit_energy * food.quantity;
    };

    food.save = function() {
      c.save(food);
    };

    food.delete = function() {
      c.delete(food);
    };

    food.convert = function() {
       food.unit_energy *= 4.184;
    };

    food.setDiaryDayId = function(diaryDayIdEx) {
      c = new client.ModelClient('/api/diary_days/' + diaryDayIdEx + '/foods', 
      function(model) {
      return { food: model };
      });
    };

    return food;
  }
  });