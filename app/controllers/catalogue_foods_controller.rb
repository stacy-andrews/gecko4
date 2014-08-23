class CatalogueFoodsController < ApplicationController
  before_action :set_catalogue_food, only: [:show, :edit, :update, :destroy]

  # GET /catalogue_foods
  # GET /catalogue_foods.json
  def index
    @catalogue_foods = CatalogueFood.all
  end

  # GET /catalogue_foods/1
  # GET /catalogue_foods/1.json
  def show
  end

  # GET /catalogue_foods/new
  def new
    @catalogue_food = CatalogueFood.new
  end

  # GET /catalogue_foods/1/edit
  def edit
  end

  # POST /catalogue_foods
  # POST /catalogue_foods.json
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

  # PATCH/PUT /catalogue_foods/1
  # PATCH/PUT /catalogue_foods/1.json
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

  # DELETE /catalogue_foods/1
  # DELETE /catalogue_foods/1.json
  def destroy
    @catalogue_food.destroy
    respond_to do |format|
      format.html { redirect_to catalogue_foods_url, notice: 'Catalogue food was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_catalogue_food
      @catalogue_food = CatalogueFood.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def catalogue_food_params
      params.require(:catalogue_food).permit(:description, :unit_energy, :carbohydrate, :protein, :fat)
    end
end
