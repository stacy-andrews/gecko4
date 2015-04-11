module Api
  class DiaryDaysController < ApplicationController
    before_action :set_diary_day, only: [:show, :update, :destroy]
    # rescue_from ActiveRecord::RecordNotFound, with: :not_found

    def not_found
      render status: 404, json: { error_message: "The resource you were looking for does not exist" }
    end

    def index
      @diary_days = DiaryDay.all
    end

    def show
    end

    def create
      @diary_day = DiaryDay.new(diary_day_params)

      respond_to do |format|
        if @diary_day.save
          format.json { render :show, status: :created }
        else
          format.json { render json: @diary_day.errors, status: :unprocessable_entity }
        end
      end
    end

    def update
      respond_to do |format|
        if @diary_day.update(diary_day_params)
          format.json { render :show, status: :ok }
        else
          format.json { render json: @diary_day.errors, status: :unprocessable_entity }
        end
      end
    end

    def destroy
      @diary_day.destroy
      respond_to do |format|
        format.json { head :no_content }
      end
    end

    private
      def set_diary_day
        @diary_day = DiaryDay.find_by!(date: params[:id])
      end

      def diary_day_params
        params.require(:diary_day).permit(:date, :is_work_day)
      end
  end
end
