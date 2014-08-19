class CreateFoods < ActiveRecord::Migration
  def change
    create_table :foods do |t|
      t.time :start_time
      t.decimal :unit_energy
      t.decimal :quantity
      t.decimal :carbohydrate
      t.decimal :fat
      t.decimal :protein
      t.string :description
      t.string :section

      t.timestamps
    end
  end
end
