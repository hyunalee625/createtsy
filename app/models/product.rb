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
#
class Product < ApplicationRecord
    validates :product_name, uniqueness: true, presence: true
    validates :description, :price, presence: true

    has_one_attached :photo
end
