class ToiletsController < ApplicationController

  def index

    respond_to do |format|
      format.html
      format.json {render json: Toilet.all}
    end

  end
end
