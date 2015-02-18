json.array!(@notes) do |note|
  json.extract! note, :id, :comment, :section, :start_time
  json.url note_url(note, format: :json)
end
