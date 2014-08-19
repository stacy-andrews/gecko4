  json.extract! @exercise, :id, :energy, :start_time, :duration
  json.url api_diary_day_exercise_url(@exercise.diary_day, @exercise, format: :json)