class CreateNotes < ActiveRecord::Migration
  def change
    create_table :notes do |t|
      t.string :comment
      t.string :section
      t.time :start_time

      t.timestamps
    end
  end
end
