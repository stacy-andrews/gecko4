module Api  
  class MeasurementsController < ApplicationController
  	before_action :set_diary_day

  	def index
  		@measurements = @diary_day.measurements

  		if @measurements.nil?
  			render json: nil, status: :not_found
  		end
  	end

  	def create
			if @diary_day.nil?
  			render json: nil, status: :not_found
  		end

  		@measurements = Measurements.new(measurements_params)

  		@diary_day.measurements = @measurements

  		@diary_day.save

  		render :index, status: :created
  	end

  	def update
  		if @diary_day.nil?
  			render json: nil, status: :not_found
  		end

  		@measurements = @diary_day.measurements

  		@measurements.update(measurements_params)

  		render :index, status: :ok
  	end

  	private 
	  	def set_diary_day
      	@diary_day = DiaryDay.find(params[:diary_day_id])
	  	end

	  	def measurements_params
        params.require(:measurements)
        			.permit(:chest, :stomach,	:thigh)
      end
  end
end