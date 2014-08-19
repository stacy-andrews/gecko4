angular.module('gecko')
  .factory('standardFoodSections', function(foodSection) {
    return {
      new: getSections
    };

    function getSections(diaryDayId) {
      return [
            getBreakfastSection(diaryDayId),
            getLunchSection(diaryDayId),
            getDinnerSection(diaryDayId)
    ];
  }

  function getBreakfastSection(diaryDayId) {
    return foodSection.new(diaryDayId, "Breakfast", function() {
      return [
        {
          description: "spelt oats",
          start_time: new Date(),
          unit_energy: 1623.392,
          quantity: 1,
          section: "Breakfast"
        },
        {
          description: "milk",
          start_time: new Date(),
          unit_energy: 380,
          quantity: 1,
          section: "Breakfast"
        }
      ];
    });
  }

  function getLunchSection(diaryDayId) {
    return new foodSection.new(diaryDayId, "Lunch", function() {
      return [
        {
          description: "rice",
          start_time: new Date(),
          unit_energy: 850,
          quantity: 2,
          section: "Lunch"
        },
        {
          description: "apple",
          start_time: new Date(),
          unit_energy: 0,
          quantity: 2,
          section: "Lunch"
        }
      ];
    })
  }

  function getDinnerSection(diaryDayId) {
    return foodSection.new(diaryDayId, "Dinner", function() { 
      return [
        {
          description: "carrot",
          start_time: new Date(),
          unit_energy: 0,
          quantity: 3,
          section: "Lunch"
        },
        {
          description: "tomato",
          start_time: new Date(),
          unit_energy: 0,
          quantity: 2,
          section: "Lunch"
        },
        {
          description: "avocado",
          start_time: new Date(),
          unit_energy: 0,
          quantity: 0.5,
          section: "Lunch"
        },
        {
          description: "cold meat",
          start_time: new Date(),
          unit_energy: 0,
          quantity: 3,
          section: "Lunch"
        },
        {
          description: "mini bites",
          start_time: new Date(),
          unit_energy: 0,
          quantity: 3,
          section: "Lunch"
        }
      ]; 
    });
  }

  });
