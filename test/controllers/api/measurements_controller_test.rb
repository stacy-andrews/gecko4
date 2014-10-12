require 'test_helper'

class Api::MeasurementsControllerTest < ActionController::TestCase
  setup do
    @diary_day = create(:diary_day)
  end

  test "should get measurements for a diary day" do
    get :index, { diary_day_id: @diary_day.id, format: :json }
    
    assert_response :success

    assert_not_nil assigns(:measurements)
  end

  test "diary day without a measurement will 404" do
    diary_day_without_a_measurement = create(:diary_day, measurements: nil).id

    get :index, { diary_day_id: diary_day_without_a_measurement, format: :json }
    
    assert_response :not_found
  end

  test "creating a measurement for an invalid diary day will 404" do
    post :create, diary_day_id: 50, measurements: { chest: 25, stomach: 35, thigh: 45 } 
  
    assert_response :not_found
  end

  test "can create a measurement" do
    diary_day_without_a_measurement = create(:diary_day, measurements: nil).id
    
    assert_difference('Measurements.count') do
      post :create, 
            diary_day_id: diary_day_without_a_measurement, 
            measurements: { chest: 25, stomach: 35, thigh: 45 } ,
            format: :json
    end
  end

  test "can update a measurement" do
    put :update, 
        diary_day_id: @diary_day.id, 
        id: @diary_day.measurements.id, 
        measurements: { chest: 26, stomach: 37, thigh: 48 }, 
        format: :json 
        
  
    assert_response :success

    updated_measurement = assigns(:measurements)

    assert_equal(26, updated_measurement.chest)
    assert_equal(37, updated_measurement.stomach)
    assert_equal(48, updated_measurement.thigh)
  end
end
