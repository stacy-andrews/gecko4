require 'rails_helper'

describe Api::NotesController do
  describe "GET for a valid diary day" do
    it "gets all notes for the diary day" do
      @diary_day = create(:diary_day_with_food)

      get :index, { format: :json, diary_day_id: @diary_day.date }

      expect(response).to be_success
    end
  end
end