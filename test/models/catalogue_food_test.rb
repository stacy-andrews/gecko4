require 'test_helper'

class CatalogueFoodTest < ActiveSupport::TestCase

  test 'will add a new catalogue food when the description is not matched by any other catalogue food' do
    CatalogueFood.update_catalogue Food.new(description: 'does not exist', unit_energy: 1.1)

    new_catalogue_food = CatalogueFood.find_by_description('does not exist')

    assert_not_nil new_catalogue_food

    assert_equal 1.1, new_catalogue_food.unit_energy
  end

  test 'will update existing catalogue foods unit energy when the description is matched' do
    CatalogueFood.create(description: 'exists', unit_energy: 9.9)

    food = Food.new(description: 'exists', unit_energy: 1.1)

    CatalogueFood.update_catalogue food

    catalogue_food = CatalogueFood.find_by(description: 'exists')

    assert_equal 1.1, catalogue_food.unit_energy
  end

  test 'updating all will use have the latest unit energy from matching foods' do
    now = Time.now

    Food.create(description: 'apple', unit_energy: 2, start_time: now)
    Food.create(description: 'apple', unit_energy: 3, start_time: now - 600)

    CatalogueFood.update_all

    assert_equal 2, CatalogueFood.find_by(description: 'apple').unit_energy
  end
end
