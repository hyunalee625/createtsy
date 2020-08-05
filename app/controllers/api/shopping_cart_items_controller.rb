class Api::ShoppingCartItemsController < ApplicationController

    def index
        @shopping_cart_items = ShoppingCartItem.all
    end

    def create
        @shopping_cart_item = ShoppingCartItem.new(shopping_cart_items_params)

        if @shopping_cart_item.save
            render :show
        else
            render json: @shopping_cart_item.errors.full_messages, status: 422
        end
    end

    def update
        @shopping_cart_item = ShoppingCartItem.find_by(id: params[:id])
        if @shopping_cart_item.update(shopping_cart_items_params)
            render :show
        else
            render json: @shopping_cart_item.errors.full_messages. status: 422
        end
    end

    def destroy
        @shopping_cart_item = ShoppingCartItem.find_by(id: params[:id])
        @shopping_cart_item.destroy
        render :show
    end

    private

    def shopping_cart_items_params
        params.require(:ShoppingCartItem).permit(:quantity, :buyer_id, :product_id)
    end

end
