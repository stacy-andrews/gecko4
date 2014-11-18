json.extract! @food, :id, :unit_energy, :start_time, :description, :section, :quantity, :caffeine
json.url api_diary_day_food_url(@diary_day, @food, format: :json)
