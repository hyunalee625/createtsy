# == Schema Information
#
# Table name: shopping_cart_items
#
#  id         :bigint           not null, primary key
#  quantity   :integer          not null
#  buyer_id   :integer          not null
#  product_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class ShoppingCartItem < ApplicationRecord
    validates :quantity, :product_id, presence: true

    belongs_to :user,
        foreign_key: :buyer_id,
        class_name: :User

    belongs_to :product,
        foreign_key: :product_id,
        class_name: :Product
end
