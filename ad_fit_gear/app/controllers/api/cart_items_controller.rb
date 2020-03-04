class Api::CartItemsController < ApplicationController

    def index
        # @cart_items = current_user.cart.products
        @cart_items = current_user.cart.cart_items
        render :index
    end

    def create
        @cart_item = CartItem.new(cart_item_params)
        if @cart_item.save
            render :index
        else     
            render json: @cart_item.errors.full_messages
        end
    end

    def update
        
    end

    def destroy
        
    end

    def cart_item_params
        params.require(:cart_item).permit(:product_id, :cart_id, :size, :quantity)
    end
end
