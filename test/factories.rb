FactoryGirl.define do 
	factory :diary_day do 
		date DateTime.new(2014, 10, 8)
  	is_work_day true
  	measurements
	end 

	factory :measurements do
		chest 25
		stomach 35
		thigh 45
	end

	factory :catalogue_food do
		
	end 
end		