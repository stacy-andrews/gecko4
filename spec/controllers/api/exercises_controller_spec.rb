require 'rails_helper'

describe Api::ExercisesController do
  describe "GET index for valid diary day" do
    before(:each) do
      @diary_day = create(:diary_day_with_food)

      get :index, { format: :json, diary_day_id: @diary_day.date }
    end

    it "response sucessfully" do
      expect(response).to be_success
    end

    it "assigns the all exercises for the diary day" do
      expect(assigns(:exercises)).to eq(@diary_day.exercises)
    end
  end

  # describe "GET index for an invalid diary day" do
  #   it "response with a record not found" do
  #     expect { get(:index, { format: :json, diary_day_id: '2012-01-01' }) }.to raise_error(ActiveRecord::RecordNotFound)
  #   end
  # end

  # describe "rescue_from exceptions" do
  #   it "shows a 404 for Record Not Found Exceptions" do
  #     controller.stub()
  #   end
  # end
end