angular.module('gecko')
  .service('foodSection', function($q, $http, food) {

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
          start_time: new Date(),
          unit_energy: null,
          quantity: null,
          section: sectionName,
          hasFocus: true
        }, this.diaryDayId));
      },
      remove: function(food) {
        var index = this.foods.indexOf(food);

        this.foods.splice(index, 1);

        food.delete();
      },
      energy: function() {
        return _.reduce(this.foods, function(memo, food) {
          return memo + food.totalEnergy();
        }, 0);
      },
      save: function() {
        var promises = [];
        
        _.each(this.foods, function(food) {
          promises.push(food.save());
        });

        return $q.all(promises);
      },
      setDiaryDayId: function(diaryDayIdEx) {
        section.diaryDayId = diaryDayIdEx;

        _.each(section.foods, function(food) {
          food.setDiaryDayId(diaryDayIdEx);
        });
      },
    }

    section.template = function() {
      var baseFoods = foodTemplate();
      
      _.each(baseFoods, function(foodTemplate) {
        section.foods
               .push(food.new(foodTemplate, section.diaryDayId));
      });
    }

    if(typeof diaryDayId != 'undefined') {
      var foodPromise = $http.get('/api/diary_days/' + diaryDayId + '/foods.json');

      foodPromise.success(function(data) {
        _(data)
            .filter(function(foodData) {
              return foodData.section === sectionName;
            })
            .sortBy(function(foodData) {
              return foodData.start_time;
            })
            .each(function(foodData) {
              foodData.hasFocus = false;

              section.foods
                 .push(food.new(foodData, diaryDayId));
            });
      });
    }

    return section;
  }


  });