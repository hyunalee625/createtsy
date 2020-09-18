class UpdateUserToProduct < ActiveRecord::Migration[5.2]
  def change
      add_column :products, :user_id, :integer
  end
end
