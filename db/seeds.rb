# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# require 'faker'

# creating User
User.destroy_all
Product.destroy_al

user1 = User.create!(
    email: 'lauren@gmail.com',
    first_name: 'lauren',
    password: 'abcde'
)

user2 = User.create!(
    email: 'juju@gmail.com',
    first_name: 'juju',
    password: '12345'
)

product1 = Product.create!(
    product_name: "Antique necklace",
    description: "pretty!",
    price: 10.00
)

product2 = Product.create!(
    product_name: "Tie-dye hoodie",
    description: "trendy",
    price: 25.50
)


# 10.times do 
#     Product.create({
#         product_name: Faker::Commerce.product_name,
#         description: Faker::Commerce.description,
#         price: Faker::Commerce.price,
#     })