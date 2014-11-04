class Food < ActiveRecord::Base
	validates :description, :section, :unit_energy, presence:true
	belongs_to :diary_day
end
