class AddCaffeineToFood < ActiveRecord::Migration
  def change
    add_column :foods, :caffeine, :integer
  end
end
