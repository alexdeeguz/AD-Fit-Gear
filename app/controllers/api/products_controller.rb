class Api::ProductsController < ApplicationController

    def index
        category_id = params[:category_id]
        @products = Product.where(category_id: category_id)
        render :index
    end

    def show
        @product = Product.find_by(id: params[:id])
        render :show
    end
end
