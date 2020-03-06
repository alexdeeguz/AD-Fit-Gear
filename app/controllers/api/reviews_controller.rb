class Api::ReviewsController < ApplicationController

    def index
        @reviews = Review.where(product_id: params[:product_id])
        render :index
    end

    def create
        @review = Review.new(review_params)
        if @review.save
            render :show
        else  
            render json: @review.errors.full_messages
        end
    end

    def show
        @review = Review.find(params[:id])
        render :show
    end

    def review_params
        params.require(:review).permit(:rating, :body, :user_id, :product_id)
    end
end
