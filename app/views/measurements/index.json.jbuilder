json.array!(@measurements) do |measurements|
  json.extract! measurements, :id, :chest, :stomach, :thigh, :diary_day_id
  json.url measurements_url(measurements, format: :json)
end
