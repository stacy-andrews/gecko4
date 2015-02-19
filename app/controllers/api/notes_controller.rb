module Api
  class NotesController < ApplicationController
    before_action :set_note, only: [:show, :edit, :update, :destroy]
    before_action :set_diary_day, only: [:index]

    # GET /notes
    # GET /notes.json
    def index
      @notes = @diary_day.notes
    end

    # GET /notes/1
    # GET /notes/1.json
    def show
    end

    # GET /notes/new
    def new
      @note = Note.new
    end

    # GET /notes/1/edit
    def edit
    end

    # POST /notes
    # POST /notes.json
    def create
      @note = Note.new(note_params)

      respond_to do |format|
        if @note.save
          format.json { render :show, status: :created, location: @note }
        else
          format.json { render json: @note.errors, status: :unprocessable_entity }
        end
      end
    end

    # PATCH/PUT /notes/1
    # PATCH/PUT /notes/1.json
    def update
      respond_to do |format|
        if @note.update(note_params)
          format.json { render :show, status: :ok, location: @note }
        else
          format.json { render json: @note.errors, status: :unprocessable_entity }
        end
      end
    end

    # DELETE /notes/1
    # DELETE /notes/1.json
    def destroy
      @note.destroy
      respond_to do |format|
        format.json { head :no_content }
      end
    end

    private
      # Use callbacks to share common setup or constraints between actions.
      def set_note
        set_diary_day

        @note = Note.find(params[:id])
      end

      def set_diary_day
        @diary_day = DiaryDay.find_by!(date: params[:diary_day_id])
      end

      # Never trust parameters from the scary internet, only allow the white list through.
      def note_params
        params.require(:note).permit(:comment, :section, :start_time)
      end
  end
end
