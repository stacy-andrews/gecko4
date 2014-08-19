class AddDiaryDayIdToFoods < ActiveRecord::Migration
  def change
    add_column :foods, :diary_day_id, :integer
  end
end
