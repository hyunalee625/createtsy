@shopping_cart_items.each do |item|
    json.set! item.id do
        json.extract! item, :id, :quantity, :product_id
        json.product do
            json.partial! "api/products/product", product: item.product
        end
        json.extract! item.product, :product_name, :price
    end
end
