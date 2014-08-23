json.array!(@catalogue_foods) do |catalogue_food|
  json.extract! catalogue_food, :id, :description, :unit_energy, :carbohydrate, :protein, :fat
  json.url catalogue_food_url(catalogue_food, format: :json)
end
