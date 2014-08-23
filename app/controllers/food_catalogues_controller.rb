class FoodCataloguesController < ApplicationController
  before_action :set_food_catalogue, only: [:show, :edit, :update, :destroy]

  def index
    prefix = params['description']

    if prefix
        @food_catalogues = FoodCatalogue.where("description LIKE :prefix", prefix: "%#{prefix}%")
    else
        @food_catalogues = FoodCatalogue.all
    end
  end

  def show
  end

  def new
    @food_catalogue = FoodCatalogue.new
  end

  def edit
  end

  def create
    @food_catalogue = FoodCatalogue.new(food_catalogue_params)

    respond_to do |format|
      if @food_catalogue.save
        format.html { redirect_to @food_catalogue, notice: 'Food catalogue was successfully created.' }
        format.json { render :show, status: :created, location: @food_catalogue }
      else
        format.html { render :new }
        format.json { render json: @food_catalogue.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    respond_to do |format|
      if @food_catalogue.update(food_catalogue_params)
        format.html { redirect_to @food_catalogue, notice: 'Food catalogue was successfully updated.' }
        format.json { render :show, status: :ok, location: @food_catalogue }
      else
        format.html { render :edit }
        format.json { render json: @food_catalogue.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @food_catalogue.destroy
    respond_to do |format|
      format.html { redirect_to food_catalogues_url, notice: 'Food catalogue was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    def set_food_catalogue
      @food_catalogue = FoodCatalogue.find(params[:id])
    end

    def food_catalogue_params
      params.require(:food_catalogue).permit(:unit_energy, :carbohydrate, :decimal, :fat, :protein, :description)
    end
end
