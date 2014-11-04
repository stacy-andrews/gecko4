class AddCaffeineToCatalogueFoods < ActiveRecord::Migration
  def change
    add_column :catalogue_foods, :caffeine, :integer
  end
end
