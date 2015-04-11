module Api  
  class FoodsController < ApplicationController
    before_action :set_foods, only: [:show, :update, :destroy]
    before_action :set_diary_day
    
    def show
    end

    def index
      @foods = @diary_day.foods
    end

    def create
      @food = @diary_day.foods.build(food_params)

      respond_to do |format|
        if @food.save
          CatalogueFood.update_catalogue @food
          format.json { render :show, status: :created }
        else
          format.json { render json: @food.errors, status: :unprocessable_entity }
        end
      end
    end

    def update
      respond_to do |format|
        if @food.update(food_params)
          format.json { render :show, status: :ok }
        else
          format.json { render json: @food.errors, status: :unprocessable_entity }
        end
      end
    end

    def destroy
      @food.destroy
      respond_to do |format|
        format.json { head :no_content }
      end
    end

    private
      def set_foods
        @food = Food.find(params[:id])
      end

      def set_diary_day
        @diary_day = DiaryDay.find_by!(date: params[:diary_day_id])
      end

      def food_params
        params.require(:food)
              .permit(:unit_energy, :start_time, 
                      :description, :section, :quantity, :caffeine)
      end
  end
end