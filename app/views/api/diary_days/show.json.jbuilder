json.extract! @diary_day, :id, :date, :is_work_day, :created_at, :updated_at
json.url api_diary_day_url(@diary_day, format: :json)