class Api::SearchController < ApplicationController

    def show
        @products = Product.where("name LIKE ?", "%#{params[:id]}%")
        render "/api/products/index"
    end
end
