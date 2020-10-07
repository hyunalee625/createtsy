json.extract! product, :id, :product_name, :description, :price
json.photo url_for(product.photo) if product.photo.attached?


