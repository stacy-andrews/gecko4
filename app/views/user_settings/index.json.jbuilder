json.array!(@user_settings) do |user_setting|
  json.extract! user_setting, :id, :resting_metabolic_rate
  json.url user_setting_url(user_setting, format: :json)
end
