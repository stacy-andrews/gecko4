json.array!(@exercises) do |exercise|
  json.extract! exercise, :id, :energy, :start_time, :duration
  json.url api_diary_day_exercise_url(@diary_day, exercise, format: :json)
end