class Api::ShoppingCartItemsController < ApplicationController
    # before_action :ensure_login

    def index
        @shopping_cart_items = ShoppingCartItem.all
        @products = [];
        @shopping_cart_items.each do |item|
            @products.push(Product.find_by(id: item.product_id))
        end
        render :index
    end


    def create
        @shopping_cart_item = ShoppingCartItem.find_by(product_id: params[:cartItem][:product_id])
 
        if @shopping_cart_item #if the item already exists
            @shopping_cart_item.quantity += 1 # increment the quantity 
             @max_quantity = false
                    if @shopping_cart_item.quantity > 10
                        @max_quantity = true
                        @shopping_cart_item.quantity = 10 # capping quantity to 10
                    end
        else # create a new shopping cart item
            @shopping_cart_item = ShoppingCartItem.new(shopping_cart_items_params)
        end


        if @shopping_cart_item.save
            render :show
        else
            render json: @shopping_cart_item.errors.full_messages, status: 401
        end
    end

    def update
        @shopping_cart_item = ShoppingCartItem.find_by(id: params[:id])
        if @shopping_cart_item.update(shopping_cart_items_params)
            render :show
        else
            render json: @shopping_cart_item.errors.full_messages, status: 422
        end
    end

    def destroy
        @shopping_cart_item = ShoppingCartItem.find_by(id: params[:id])
        if @shopping_cart_item.destroy
            render :show
        else
            render json: @shopping_cart_item.errors.full_messages, status: 422
        end

    end

    private

    def shopping_cart_items_params
        params.require(:cartItem).permit(:id, :quantity, :product_id)
    end

end
