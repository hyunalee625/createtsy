class Api::ProductsController < ApplicationController

    def index
        @products = Product.all 
        render :index
    end

    # def create
    #     @product = Product.new(product_params)

    #     if @product.save
    #         render :show
    #     else
    #         render json: @product.errors.full_messages, status: 422
    #     end
        
    # end
    
    def show
        @product = Product.find(params[:id])
        render :show
    end

    private

    def product_params
        params.require(:product).permit(:product_name, :description, :price)
    end

end


# $.ajax({type: 'GET', url: '/api/products/', data: {product: {product_name: "name", description: "yay", price: 76}}})