require 'rails_helper'

describe Api::DiaryDaysController do
  describe "GET show for a valid diary day" do
    before(:each) do
      @diary_day = create(:diary_day_with_food)
      get :show, { format: :json, id: @diary_day.date }
    end

    it "returns a successful 200 response" do
      expect(response).to be_success
    end

    it "assigns the diary day" do
      expect(assigns(:diary_day)).to eq(@diary_day)
    end
  end

end