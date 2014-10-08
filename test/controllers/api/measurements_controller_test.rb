require 'test_helper'

class Api::MeasurementsControllerTest < ActionController::TestCase
  setup do
    @diary_day = create(:diary_day)
  end

  test "should get measurements for a diary day" do
    get :index, { diary_day_id: @diary_day.id, format: :json }
    
    assert_response :success

    expected_measurements = assigns(:measurements)
    assert_not_nil expected_measurements
  end
 
  test "fixture wtf" do
    assert_equal 25, @diary_day.measurements.chest
  end
end
