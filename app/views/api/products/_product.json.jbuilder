json.extract! product, :id, :product_name, :description, :price
json.photoUrl url_for(product.photo)
json.creator do 
    json.partial! "api/products/product"
end

