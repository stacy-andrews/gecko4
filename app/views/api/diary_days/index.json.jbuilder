json.array!(@diary_days) do |diary_day|
  json.extract! diary_day, :id, :date, :is_work_day
  json.url api_diary_day_url(diary_day, format: :json)
end
