require 'test_helper'

class Api::FoodsControllerTest < ActionController::TestCase
	setup do
    @diary_day = create(:diary_day_with_food)
  end

	test "gets all foods for the diary day" do
  	get :index, { diary_day_id: @diary_day.id, format: :json }
		
  	assigned_food = assigns(:foods)
  	
		assert_equal assigned_food.length, @diary_day.foods.length
	end
end