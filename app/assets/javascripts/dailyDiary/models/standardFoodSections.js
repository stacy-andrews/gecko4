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
          unit_energy: 485,
          quantity: 2,
          section: "Lunch"
        }
      ];
    })
  }

  function getDinnerSection(diaryDayId) {
    var sectionName = "Dinner";

    return foodSection.new(diaryDayId, sectionName, function() { 
      return [
        {
          description: "carrot",
          start_time: new Date(),
          unit_energy: 125,
          quantity: 3,
          section: sectionName
        },
        {
          description: "tomato",
          start_time: new Date(),
          unit_energy: 92,
          quantity: 2,
          section: sectionName
        },
        {
          description: "avocado",
          start_time: new Date(),
          unit_energy: 1350,
          quantity: 0.5,
          section: sectionName
        },
        {
          description: "cold meat",
          start_time: new Date(),
          unit_energy: 500,
          quantity: 3,
          section: sectionName
        },
        {
          description: "mini bites",
          start_time: new Date(),
          unit_energy: 350,
          quantity: 3,
          section: sectionName
        }
      ]; 
    });
  }

  });
