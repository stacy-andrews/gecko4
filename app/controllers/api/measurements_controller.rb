module Api  
  class MeasurementsController < ApplicationController
  	def index
      @diary_day = DiaryDay.find(params[:diary_day_id])
  		
  		@measurements = @diary_day.measurements
  	end
  end
end