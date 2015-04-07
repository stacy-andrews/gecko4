require 'rails_helper'

describe Api::FoodsController do
  describe "GET index" do
    it "gets all foods for the diary day" do
      @diary_day = create(:diary_day_with_food)

      get :index, { format: :json, diary_day_id: @diary_day.id }

      expect(response).to be_success
    end
  end
end