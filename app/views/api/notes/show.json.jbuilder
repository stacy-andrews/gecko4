json.extract! @note, :id, :comment, :section, :start_time, :created_at, :updated_at
  json.url api_diary_day_note_url(@diary_day, note, format: :json)
