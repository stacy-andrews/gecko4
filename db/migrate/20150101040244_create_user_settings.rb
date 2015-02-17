class CreateUserSettings < ActiveRecord::Migration
  def change
    create_table :user_settings do |t|
      t.decimal :resting_metabolic_rate

      t.timestamps
    end
  end
end
