require 'test_helper'

class FoodValidationTest < ActiveSupport::TestCase
  setup do
    @food = Food.new
    assert @food.invalid?
  end

  test "is not valid without a description" do
  	assert @food.errors[:description].any?
  end

  test "is not valid without a section" do
    assert @food.errors[:section].any?
  end

  test "is not valid without a unit energy" do
    assert @food.errors[:unit_energy].any?
  end

  test "is valid without caffeine" do
    assert_equal @food.errors.include?(:caffeine), false
  end
end
