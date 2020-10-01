json.partial! 'review', review: @review

# json.user do
#     json.partial! 'api/users/user', user: @review.user
# end

json.rating @review.product.rating 