class EditProduct < ActiveRecord::Migration[5.2]
  def change
    remove_column :products, :pic_url
  end
end
