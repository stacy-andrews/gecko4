module Api  
  class ExercisesController < ApplicationController
    before_action :set_exercise, only: [:show, :update, :destroy]

    before_action :set_diary_day
    
    def show
    end

    def index
      @exercises = @diary_day.exercises
    end

    def create
      @exercise = @diary_day.exercises.build(exercise_params)

      respond_to do |format|
        if @exercise.save
          format.json { render :show, status: :created }
        else
          format.json { render json: @exercise.errors, status: :unprocessable_entity }
        end
      end
    end

    def update
      respond_to do |format|
        if @exercise.update(exercise_params)
          format.json { render :show, status: :ok, location: @diary_day }
        else
          format.json { render json: @diary_day.errors, status: :unprocessable_entity }
        end
      end
    end

    private
      def set_exercise
        @exercise = Exercise.find(params[:id])
      end

      def set_diary_day
        @diary_day = DiaryDay.find_by!(date: params[:diary_day_id])
      end

      def exercise_params
        params.require(:exercise).permit(:energy, :start_time, :duration)
      end
  end
end