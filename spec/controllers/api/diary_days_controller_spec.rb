require 'rails_helper'

describe Api::DiaryDaysController do
  describe "GET show" do
    it "returns a successful 200 response" do
      @diary_day = create(:diary_day_with_food)

      get :show, { format: :json, id: @diary_day.date }

      expect(response).to be_success
    end
  end

end