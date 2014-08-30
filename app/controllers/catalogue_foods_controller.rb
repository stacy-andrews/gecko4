class CatalogueFoodsController < ApplicationController
  before_action :set_catalogue_food, only: [:show, :edit, :update, :destroy]

  def index
    @catalogue_foods = CatalogueFood.search_by_description(params[:description])
  end

  def show
  end

  def new
    @catalogue_food = CatalogueFood.new
  end

  def edit
  end

  def create
    @catalogue_food = CatalogueFood.new(catalogue_food_params)

    respond_to do |format|
      if @catalogue_food.save
        format.html { redirect_to @catalogue_food, notice: 'Catalogue food was successfully created.' }
        format.json { render :show, status: :created, location: @catalogue_food }
      else
        format.html { render :new }
        format.json { render json: @catalogue_food.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    respond_to do |format|
      if @catalogue_food.update(catalogue_food_params)
        format.html { redirect_to @catalogue_food, notice: 'Catalogue food was successfully updated.' }
        format.json { render :show, status: :ok, location: @catalogue_food }
      else
        format.html { render :edit }
        format.json { render json: @catalogue_food.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @catalogue_food.destroy
    respond_to do |format|
      format.html { redirect_to catalogue_foods_url, notice: 'Catalogue food was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    def set_catalogue_food
      @catalogue_food = CatalogueFood.find(params[:id])
    end

    def catalogue_food_params
      params.require(:catalogue_food).permit(:description, :unit_energy, :carbohydrate, :protein, :fat)
    end
end
