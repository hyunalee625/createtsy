# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# require 'faker'
# Faker.clear

# creating User
User.destroy_all
Product.destroy_all

user1 = User.create!(
    {email: 'lauren@gmail.com',
    first_name: 'lauren',
    password: 'abcde'}
)

user2 = User.create!(
    {email: 'juju@gmail.com',
    first_name: 'juju',
    password: '12345'}
)

product1 = Product.create!(
    {product_name: "Unicorn macarons",
    description: "cute and yummy!",
    price: 42,
    pic_url: "https://i.etsystatic.com/15001088/r/il/3789d4/1433874687/il_794xN.1433874687_8i9y.jpg"}
)

product2 = Product.create!(
    {product_name: "Tie-dye hoodie",
    description: "trendy",
    price: 68,
    pic_url: "https://media.thereformation.com/image/upload/q_auto:eco/c_scale,w_auto:breakpoints_100_1668_9_20:788/v1/prod/product_images/tanner-classic-hoodie/tornado/5e1f9e7324f3bb001a3b6c0d/original.jpg"}
)

product3 = Product.create!(
    {product_name: "ceramic cup set",
    description: "perfect for gift",
    price: 25,
    pic_url: "https://cdn.shopify.com/s/files/1/1398/8653/products/50_7cbdcee6-d2c1-442e-bae8-24e2c3561b3f_1024x1024.jpg?v=1588300950"}
)


# 10.times do 
#     Product.create({
#         product_name: Faker::Commerce.product_name,
#         description: Faker::Commerce.description,
#         price: Faker::Commerce.price,
#     })