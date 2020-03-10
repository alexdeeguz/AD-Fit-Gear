class Api::ProductsController < ApplicationController

    def index
        category_id = params[:category_id]
        @products = Product.where(category_id: category_id)
        render :index
    end

    def show
        # category_id = params[:category_id]
        @product = Product.find_by(id: params[:id])
        render :show
    end

    # def product_params
    #     params.require(:product).permit(:name, :price, :description, :category_id, photos: [])
    # end

end
