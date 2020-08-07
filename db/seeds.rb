# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# require 'faker'
# Faker.clear

# 20.times do 
#     Product.create({
#         product_name: Faker::Commerce.product_name,
#         description: Faker::Commerce.department,
#         price: Faker::Commerce.price,
#     })
# end

require 'open-uri'

User.destroy_all
Product.destroy_all

# creating User
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
    {
        product_name: "Tie-dye hoodie",
        description: "trendy",
        price: 68,
    }
)

link1 = open("https://createtsy-products-seeds.s3.amazonaws.com/tie_dye_hoodie1.jpg")
product1.photo.attach(io: link1, filename: 'tie_dye_hoodie1.jpg')
    
product2 = Product.create!(
    {
        product_name: "Ceramic cup set",
        description: "perfect for gift",
        price: 25.50,
    }
)

link2 = open("https://createtsy-products-seeds.s3.amazonaws.com/ceramic_cups1.jpg")
product2.photo.attach(io: link2, filename: 'ceramic_cups1.jpg')
        
product3 = Product.create!(
    {
        product_name: "Unicorn macarons",
        description: "Hand Painted with food coloring and vanilla extract!",
        price: 42,
    }
)

link3 = open("https://createtsy-products-seeds.s3.amazonaws.com/unicorn_macarons1.jpg")
product3.photo.attach(io: link3, filename: 'unicorn_macarons1.jpg')

product4 = Product.create!(
    {
        product_name: "Granite keyboard",
        description: "Granite is a mega-keycap set - it offers coverage over a wide variety of both common and enthusiast mechanical keyboards. If you are looking for a consistent aesthetic that you will be able to use around the world with all of your keyboards, SA Granite is the ultimate set.",
        price: 70,
    }
)

link4 = open("https://createtsy-products-seeds.s3.amazonaws.com/granite_keyboard1.jpg")
product4.photo.attach(io: link4, filename: 'granite_keyboard1.jpg')
    
product5 = Product.create!(
    {
        product_name: "Morton floor lamp",
        description: "Crafted of natural wood, our Morton Floor Lamp brings a casual touch to any space. Whether you want to complete a contemporary room or lend a touch of coastal style to a more traditional space, this lighting is the perfect choice for your home.",
        price: 249,
    }
)

link5 = open("https://createtsy-products-seeds.s3.amazonaws.com/morton_floor_lamp1.jpg")
product5.photo.attach(io: link5, filename: 'morton_floor_lamp1.jpg')
        
product6 = Product.create!(
    {
        product_name: "Coffee table",
        description: 'Made from metal, its frame features a crisscross base in a gold finish for a hint of glam. Up above, the circular top is made from engineered wood with a durable laminate finish that’s versatile enough to mix with most color palettes. This compact 36" diameter piece is the perfect pick for smaller living rooms.',
        price: 226,
    }
)

link6 = open("https://createtsy-products-seeds.s3.amazonaws.com/coffee_table1.jpg")
product6.photo.attach(io: link6, filename: 'coffee_table1.jpg')

product7 = Product.create!(
    {
        product_name: "Travel watch holder",
        description: "Keep your favorite watches safe and protected at home or away with this functional watch roll. This portable case is thoughtfully designed to fit three watches on a padded removable cushion and features a micro suede lining, a double snap closure and a hidden compartment inside for cufflinks or collar stays. Add a foil debossed monogram for a personal touch.",
        price: 119,
    }
)

link7 = open("https://createtsy-products-seeds.s3.amazonaws.com/watch_holder1.jpg")
product7.photo.attach(io: link7, filename: 'watch_holder1.jpeg')
    
product8 = Product.create!(
    {
        product_name: "iPad stand",
        description: "The iPad Stand features clean lines and a modern aesthetic, and is optimized for using on a countertop, table or desk. It works well in both landscape and portrait mode, and is compatible with all generations of iPad as well as most other tablets (can also be used with very slim-fitting cases). Handcrafted from domestically sourced wood, natural variations in texture and color make each piece subtly unique.",
        price: 52,
    }
)

link8 = open("https://createtsy-products-seeds.s3.amazonaws.com/ipad_stand.jpg")
product8.photo.attach(io: link8, filename: 'ipad_stand.jpg')
        
product9 = Product.create!(
    {
        product_name: "Brass metal utensils",
        description: "This bold flatware isn't just for company; the stainless steel core makes it sturdy enough for everyday use while its unique shape makes every meal feel a little special. ",
        price: 39.50,
    }
)

link9 = open("https://createtsy-products-seeds.s3.amazonaws.com/brass_metal_utensils1.jpg")
product9.photo.attach(io: link9, filename: 'brass_metal_utensils1.jpg')

product10 = Product.create!(
    {
        product_name: "RGB gaming mouse pad",
        description: "The micro textured hard surface allows for quick and smooth gliding.  A non-slip rubber base keeps the pad from moving even during fast paced gaming sessions.  The large size allows for plenty of movement.",
        price: 30,
    }
)

link10 = open("https://createtsy-products-seeds.s3.amazonaws.com/gaming_mouse_pad1.jpg")
product10.photo.attach(io: link10, filename: 'gaming_mouse_pad1.jpg')
    
