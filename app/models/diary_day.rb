class DiaryDay < ActiveRecord::Base
  has_many :foods, dependent: :destroy
  has_many :exercises, dependent: :destroy
  has_one :measurements, dependent: :destroy
  has_many :notes, dependent: :destroy
  
	def to_param
		"#{date}"
	end
end
