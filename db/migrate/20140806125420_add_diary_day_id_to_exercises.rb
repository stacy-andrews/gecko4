class AddDiaryDayIdToExercises < ActiveRecord::Migration
  def change
    add_column :exercises, :diary_day_id, :integer
  end
end
