json.array!(@notes) do |note|
  json.extract! note, :id, :comment, :section, :start_time
  json.url api_diary_day_note_url(@diary_day, note, format: :json)
end
