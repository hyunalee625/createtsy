class UpdateProductsColumn < ActiveRecord::Migration[5.2]
  def change
    change_column_null :shopping_cart_items, :buyer_id, true
  end
end
