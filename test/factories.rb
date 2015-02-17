FactoryGirl.define do  factory :user_setting do
    resting_metabolic_rate "9.99"
  end
 
	factory :diary_day do 
		date DateTime.new(2014, 10, 8)
  		is_work_day true
  		measurements

  		factory :diary_day_with_food do
  			after(:create) do |diary_day, evaluator|
        	create_list(:food, 5, diary_day: diary_day)
      	end
  		end
	end 

	factory :measurements do
		chest 25
		stomach 35
		thigh 45
	end

	factory :catalogue_food do
		# description 'candle'
		# unit_energy 9.9
	end 

	factory :food do
		description 'home coffee'
		unit_energy 9.2
		section 'lunch'
	end
end		