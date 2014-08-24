class CatalogueFood < ActiveRecord::Base
  def self.update_catalogue(food)
    existing_catalogue_item = CatalogueFood.find_by(description: food.description)

    if existing_catalogue_item
      existing_catalogue_item.update unit_energy: food.unit_energy
    else
      CatalogueFood.create(description: food.description, unit_energy: food.unit_energy)
    end
  end

  def self.update_all
    Food.order(start_time: :asc).each do |f|
      CatalogueFood.update_catalogue f
    end
  end
end
