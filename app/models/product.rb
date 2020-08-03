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
#  pic_url      :string           not null
#
class Product < ApplicationRecord
    validates :product_name, uniqueness: true, presence: true
    validates :description, :price, :pic_url, presence: true
end
