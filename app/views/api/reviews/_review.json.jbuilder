json.extract! review, :id, :body, :user_id, :product_id, :rating, :created_at

json.user review.user.first_name