class CreateCatalogueFoods < ActiveRecord::Migration
  def change
    create_table :catalogue_foods do |t|
      t.string :description
      t.decimal :unit_energy
      t.decimal :carbohydrate
      t.decimal :protein
      t.decimal :fat

      t.timestamps
    end
  end
end
