class AddCaffeineToFoodCatalogue < ActiveRecord::Migration
  def change
    add_column :food_catalogues, :caffeine, :integer
  end
end
