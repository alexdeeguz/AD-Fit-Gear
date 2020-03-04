class Api::ProductsController < ApplicationController

    def index
        category_id = params[:category_id]
        @products = Product.where(category_id: category_id)
        render :index
    end

    def show
        # category_id = params[:category_id]
        id = params[:id]
        @product = Product.where(id: id)
        render :show
    end
end
