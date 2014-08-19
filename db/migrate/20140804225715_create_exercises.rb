class CreateExercises < ActiveRecord::Migration
  def change
    create_table :exercises do |t|
      t.time :start_time
      t.decimal :energy
      t.decimal :duration
      t.string :description

      t.timestamps
    end
  end
end
