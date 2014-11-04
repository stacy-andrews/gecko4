class CatalogueFood < ActiveRecord::Base
  def self.update_catalogue(food)
    existing_catalogue_item = CatalogueFood.find_by(description: food.description)

    if existing_catalogue_item
      if food.unit_energy 
        existing_catalogue_item.update unit_energy: food.unit_energy
      end

      if food.caffeine
        existing_catalogue_item.update caffeine: food.caffeine
      end
    else
      CatalogueFood.create description: food.description, unit_energy: food.unit_energy, caffeine: food.caffeine
    end
  end

  def self.update_all
    Food.order(start_time: :asc).each do |f|
      CatalogueFood.update_catalogue f
    end
  end

  def self.search_by_description(description) 
    if(!description)
      CatalogueFood.all
    else
      CatalogueFood.where('description LIKE ?', "%#{description}%")
    end
  end

end
