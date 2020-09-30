@shopping_cart_items.each do |item|
    # debugger
    json.set! item.id do
        json.extract! item, :id, :product_id, :quantity
        json.extract! item.product, :product_name, :price


        # json.product item.product.product_name

        # json.product do
        #     json.partial! "api/products/product", product: item.product
        # end

        # json.extract! item.product, :product_name, :price
    end
end





# @shopping_cart_items.each do |item|
#     json.set! item.product_id do
#         json.extract! item.product, :id, :product_name, :price
#     end
# end


