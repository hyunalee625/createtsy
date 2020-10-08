# == Schema Information
#
# Table name: products
#
#  id           :bigint           not null, primary key
#  product_name :string           not null
#  description  :text             not null
#  price        :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  user_id      :integer
#
class Product < ApplicationRecord
    validates :product_name, uniqueness: true, presence: true
    validates :description, :price, presence: true

    has_one_attached :photo

    has_many :shopping_cart_items,
        foreign_key: :product_id,
        class_name: :ShoppingCartItem 

    has_many :reviews, dependent: :destroy

    def self.search(search_query)
        searched = self.where("name like ?", "%" + search_query + "%")
        if results != []
            results
        else
            Product.all
        end
    end
end
