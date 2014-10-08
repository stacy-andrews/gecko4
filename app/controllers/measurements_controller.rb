class MeasurementsController < ApplicationController
  before_action :set_measurements, only: [:show, :edit, :update, :destroy]

  # GET /measurements
  # GET /measurements.json
  def index
    @measurements = Measurements.all
  end

  # GET /measurements/1
  # GET /measurements/1.json
  def show
  end

  # GET /measurements/new
  def new
    @measurements = Measurements.new
  end

  # GET /measurements/1/edit
  def edit
  end

  # POST /measurements
  # POST /measurements.json
  def create
    @measurements = Measurements.new(measurements_params)

    respond_to do |format|
      if @measurements.save
        format.html { redirect_to @measurements, notice: 'Measurements was successfully created.' }
        format.json { render :show, status: :created, location: @measurements }
      else
        format.html { render :new }
        format.json { render json: @measurements.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /measurements/1
  # PATCH/PUT /measurements/1.json
  def update
    respond_to do |format|
      if @measurements.update(measurements_params)
        format.html { redirect_to @measurements, notice: 'Measurements was successfully updated.' }
        format.json { render :show, status: :ok, location: @measurements }
      else
        format.html { render :edit }
        format.json { render json: @measurements.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /measurements/1
  # DELETE /measurements/1.json
  def destroy
    @measurements.destroy
    respond_to do |format|
      format.html { redirect_to measurements_index_url, notice: 'Measurements was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_measurements
      @measurements = Measurements.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def measurements_params
      params.require(:measurements).permit(:chest, :stomach, :thigh, :diary_day_id)
    end
end
