require 'test_helper'

class CatalogueFoodsControllerTest < ActionController::TestCase
  setup do
    @catalogue_food = catalogue_foods(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:catalogue_foods)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create catalogue_food" do
    assert_difference('CatalogueFood.count') do
      post :create, catalogue_food: { carbohydrate: @catalogue_food.carbohydrate, description: @catalogue_food.description, fat: @catalogue_food.fat, protein: @catalogue_food.protein, unit_energy: @catalogue_food.unit_energy }
    end

    assert_redirected_to catalogue_food_path(assigns(:catalogue_food))
  end

  test "should show catalogue_food" do
    get :show, id: @catalogue_food
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @catalogue_food
    assert_response :success
  end

  test "should update catalogue_food" do
    patch :update, id: @catalogue_food, catalogue_food: { carbohydrate: @catalogue_food.carbohydrate, description: @catalogue_food.description, fat: @catalogue_food.fat, protein: @catalogue_food.protein, unit_energy: @catalogue_food.unit_energy }
    assert_redirected_to catalogue_food_path(assigns(:catalogue_food))
  end

  test "should destroy catalogue_food" do
    assert_difference('CatalogueFood.count', -1) do
      delete :destroy, id: @catalogue_food
    end

    assert_redirected_to catalogue_foods_path
  end
end
