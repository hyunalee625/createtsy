class Api::ProductsController < ApplicationController

    def index
        @products = Product.all 
        render :index
    end
    
    def show
        # debugger
        # @product = Product.find_by(id: params[:id])
        @product = Product.find(params[:id])

        render :show
    end

    def search 
        search_word = params[:search_query].downcase

        debugger
        @products = Product.all.select do |product|
            product_name = product.product_name.downcase
            product_name.include?(search_word)
        end

        render :index
    end

    private

    def product_params
        params.require(:product).permit(:id, :product_name, :description, :price, :photo)
    end

end


# $.ajax({type: 'GET', url: '/api/products/', data: {product: {product_name: "name", description: "yay", price: 76}}})