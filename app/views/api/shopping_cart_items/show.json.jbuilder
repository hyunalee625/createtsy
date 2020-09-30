json.extract! @shopping_cart_item, :id, :quantity, :product_id
json.product_name @shopping_cart_item.product.product_name
json.price @shopping_cart_item.product.price
