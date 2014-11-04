require 'test_helper'

class CatalogueFoodTest < ActiveSupport::TestCase
  test 'will not update existing catalogue foods unit energy when the description is matched but energy is nil' do
    CatalogueFood.create(description: 'exists', unit_energy: 9.9)

    food = Food.new(description: 'exists', unit_energy: nil)

    CatalogueFood.update_catalogue food

    catalogue_food = CatalogueFood.find_by(description: 'exists')

    assert_equal 9.9, catalogue_food.unit_energy
  end

  test 'updating all will use have the latest unit energy from matching foods' do
    now = Time.now

    Food.create(description: 'apple', section: 'blah', unit_energy: 2, start_time: now)
    Food.create(description: 'apple', section: 'blah2', unit_energy: 3, start_time: now - 600)

    CatalogueFood.update_all

    assert_equal 2, CatalogueFood.find_by(description: 'apple').unit_energy
  end
end

class CatalogueFoodNewTest < ActiveSupport::TestCase
  setup do
    CatalogueFood.update_catalogue Food.new(description: 'does not exist', unit_energy: 1.1, caffeine: 45)

    @new_catalogue_food = CatalogueFood.find_by_description('does not exist')
  end

  test 'will add a new catalogue food when the description is not matched by any other catalogue food' do
    assert_equal 1.1, @new_catalogue_food.unit_energy
  end

  test 'will set caffeine value' do
    assert_equal 45, @new_catalogue_food.caffeine
  end
end

class CatalogueFoodExistingTest < ActiveSupport::TestCase
  setup do
    CatalogueFood.create(description: 'exists', unit_energy: 9.9)

    food = Food.new(description: 'exists', unit_energy: 1.1, caffeine: 51)

    CatalogueFood.update_catalogue food

    @catalogue_food = CatalogueFood.find_by(description: 'exists')
  end

  test 'will update existing catalogue foods unit energy when the description is matched' do
    assert_equal 1.1, @catalogue_food.unit_energy
  end

  test 'will update existing catalogue foods caffeine when the description is matched' do
    assert_equal 51, @catalogue_food.caffeine
  end
end

class CatalogueFoodSearchTest < ActiveSupport::TestCase
  test 'search for partial descriptions' do
    CatalogueFood.create(description: 'candle', unit_energy: 9.9)
    CatalogueFood.create(description: 'exists cand', unit_energy: 9.9)
    CatalogueFood.create(description: 'not found', unit_energy: 9.9)
    CatalogueFood.create(description: 'can of peas', unit_energy: 9.9)


    found_catalogue_foods = CatalogueFood.search_by_description('can')

    assert_equal 3, found_catalogue_foods.count
  end

  test 'search without description gets all foods' do
    create(:catalogue_food, description: 'candle', unit_energy: 9.9)
    create(:catalogue_food, description: 'exists cand', unit_energy: 9.9)
    create(:catalogue_food, description: 'not found', unit_energy: 9.9)
    create(:catalogue_food, description: 'can of peas', unit_energy: 9.9)

    found_catalogue_foods = CatalogueFood.search_by_description(nil)

    assert_equal 4, found_catalogue_foods.count
  end
end
