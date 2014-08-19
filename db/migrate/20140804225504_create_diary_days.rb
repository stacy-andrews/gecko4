class CreateDiaryDays < ActiveRecord::Migration
  def change
    create_table :diary_days do |t|
      t.date :date
      t.boolean :is_work_day

      t.timestamps
    end
  end
end
