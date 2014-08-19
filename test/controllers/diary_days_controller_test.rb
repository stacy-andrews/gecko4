require 'test_helper'

class DiaryDaysControllerTest < ActionController::TestCase
  setup do
    @diary_day = diary_days(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:diary_days)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create diary_day" do
    assert_difference('DiaryDay.count') do
      post :create, diary_day: { date: @diary_day.date, is_work_day: @diary_day.is_work_day }
    end

    assert_redirected_to diary_day_path(assigns(:diary_day))
  end

  test "should show diary_day" do
    get :show, id: @diary_day
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @diary_day
    assert_response :success
  end

  test "should update diary_day" do
    patch :update, id: @diary_day, diary_day: { date: @diary_day.date, is_work_day: @diary_day.is_work_day }
    assert_redirected_to diary_day_path(assigns(:diary_day))
  end

  test "should destroy diary_day" do
    assert_difference('DiaryDay.count', -1) do
      delete :destroy, id: @diary_day
    end

    assert_redirected_to diary_days_path
  end
end
