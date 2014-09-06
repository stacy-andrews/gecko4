angular.module('gecko')
  .factory('foodSection', function($http, food) {

    return {
      new: function(diaryDayId, sectionName, foodTemplate) {
        return new FoodSection(diaryDayId, sectionName, foodTemplate);
      }
    };

  function FoodSection(diaryDayId, sectionName, foodTemplate) {

    var section = {
      foods: [],
      diaryDayId: diaryDayId,
      name: sectionName,
      new: function() {
        this.foods.push(food.new({
          description: null,
          start_time: null,
          unit_energy: null,
          quantity: null,
          section: sectionName
        }, this.diaryDayId));
      },
      remove: function(food) {
        var index = this.foods.indexOf(food);

        this.foods.splice(index, 1);

        food.delete();
      },
      duplicate: function(foodToCopy) {
        this.foods.push(food.new({
          description: foodToCopy.description,
          start_time: foodToCopy.start_time,
          unit_energy: foodToCopy.unit_energy,
          quantity: foodToCopy.quantity,
          section: sectionName
        }, this.diaryDayId));
      },
      energy: function() {
        return _.reduce(this.foods, function(memo, food) {
          return memo + food.totalEnergy();
        }, 0);
      },
      save: function() {
        _.each(this.foods, function(food) {
          food.save();
        });
      },
      setDiaryDayId: function(diaryDayIdEx) {
        this.diaryDayId = diaryDayIdEx;

        _.each(this.foods, function(food) {
          food.setDiaryDayId(diaryDayIdEx);
        });
      },
    }

    section.template = function() {
        var baseFoods = foodTemplate();
        _.each(baseFoods, function(foodTemplate) {
          section.foods.push(food.new(foodTemplate, section.diaryDayId));
        });
      }

    if(typeof diaryDayId != 'undefined') {
      var foodPromise = $http.get('/api/diary_days/' + diaryDayId + '/foods.json');

      foodPromise.success(function(data) {
        var filtered = _.filter(data, function(foodData) {
          return foodData.section === sectionName;
        });

        _.each(filtered, function(foodData) {
          section.foods.push(food.new(foodData, diaryDayId));
        });
      });
    }

    return section;
  }


  });