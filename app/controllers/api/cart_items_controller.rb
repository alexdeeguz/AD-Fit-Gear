class Api::CartItemsController < ApplicationController

    def index
        if logged_in?
            @cart_items = current_user.cart.cart_items
        else  
            @cart_items = CartItem.all
        end
        render :index
    end

    def show
        @cart_item = CartItem.find(params[:id])
        render :show
    end

    def create
        @cart_item = CartItem.new(cart_item_params)
        if @cart_item.save
            render :show
        else     
            render json: @cart_item.errors.full_messages
        end
    end

    def update
        @cart_item = CartItem.find(params[:id])
        if @cart_item.update(cart_item_params)
            render :show
        else  
            render json: @cart_item.errors.full_messages
        end
    end

    def destroy
        cart_item = CartItem.find(params[:id])
        cart_item.delete
    end

    def cart_item_params
        params.require(:cart_item).permit(:product_id, :cart_id, :size, :quantity)
    end
end
