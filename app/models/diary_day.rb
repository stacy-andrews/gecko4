class DiaryDay < ActiveRecord::Base
  has_many :foods, dependent: :destroy
  has_many :exercises, dependent: :destroy

    def to_param
    	"#{date}"
  	end
end
