class CreateMeasurements < ActiveRecord::Migration
  def change
    create_table :measurements do |t|
      t.decimal :chest
      t.decimal :stomach
      t.decimal :thigh
      t.integer :diary_day_id

      t.timestamps
    end
  end
end
