require 'test_helper'
require 'delorean'

class Api::DiaryDaysControllerTest < ActionController::TestCase

  test "will return a single diary day identified by the date" do
    diary_day_date = Date.parse('2014-01-01')

    DiaryDay.create(date: diary_day_date, is_work_day: true)

    get :show, { id: '2014-01-01', format: :json }
    
    assert_response :success

    actual = assigns(:diary_day)

    assert_equal diary_day_date, actual.date
    assert_equal true, actual.is_work_day
  end

  test "will return a 404 for a diary day not found" do
    get :show, { id: '2014-01-01', format: :json }

    assert_response :not_found
  end

end