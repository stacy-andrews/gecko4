require 'test_helper'
require 'delorean'

class Api::DiaryDaysControllerTest < ActionController::TestCase
  
  test "returns the current diary day for the date when it exists" do

    Delorean.time_travel_to("1 month ago") do
      time_now = Date.current

      DiaryDay.create(date: time_now, is_work_day: true)
    
      assert_difference('DiaryDay.count', 0) do
        get :today, format: :json
      end

      assert_response :success

      actual = assigns(:diary_day)
      assert_equal time_now, actual.date
    end
  end

  test "will create the diary day for today and return it if it does not exist" do
    Delorean.time_travel_to("1 month ago") do
      assert_difference('DiaryDay.count', 1) do
        get :today, format: :json
      end

      assert_response :success
      actual = assigns(:diary_day)
    end
  end
end