# == Schema Information
#
# Table name: reviews
#
#  id         :bigint           not null, primary key
#  body       :text             not null
#  user_id    :integer          not null
#  product_id :integer          not null
#  rating     :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Review < ApplicationRecord
    # validates :user_id, :product_id, presence: true
    validates :body, presence: true, length: {maximum: 350}
    validates :rating, presence: true, inclusion: {in: (1..5)}

    belongs_to :user
    belongs_to :product

    
end
