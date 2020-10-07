@shopping_cart_items.each do |item|
    # debugger
    json.set! item.id do
        json.extract! item, :id, :product_id, :quantity
        json.extract! item.product, :product_name, :price
        json.photo url_for(item.product.photo)

    end
end
