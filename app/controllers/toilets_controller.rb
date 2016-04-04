class ToiletsController < ApplicationController
  def index
    respond_to do |format|
      format.html
      format.json{ render json: Toilet.all}
    end
  end

  def destroy
    Toilet.destroy(params[:id])
    render json: {success: true}, status: :ok
  end

  def create
    @toilet = Toilet.create(toilet_params)
    render json: @toilet, status: :ok
  end

  def update
    @toilet = Toilet.find(params[:id])
    @toilet.update!(toilet_params)
    render json: @toilet, status: :ok
  end

  private
  def toilet_params
    params.require(:toilet).permit(:street, :city, :state, :zip, :cleanliness, :handicapped, :lgbt_friendly, :unisex, :changing_table, :rating, :wait_time)
  end
end
