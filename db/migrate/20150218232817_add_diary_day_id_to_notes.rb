class AddDiaryDayIdToNotes < ActiveRecord::Migration
  def change
    add_column :notes, :diary_day_id, :integer
  end
end
