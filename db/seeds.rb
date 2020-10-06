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

# require 'open-uri'

User.destroy_all
Product.destroy_all
Review.destroy_all

##### creating User #####
Lauren = User.create!(
    {email: 'lauren@gmail.com',
    first_name: 'lauren',
    password: 'abcde'}
)

Juju = User.create!(
    {email: 'juju@gmail.com',
    first_name: 'juju',
    password: '12345'}
)

Jin = User.create!(
    {email: 'jinjin@gmail.com',
    first_name: 'jin',
    password: '98765'}
)

Dan = User.create!(
    {email: 'dan@gmail.com',
    first_name: 'dan',
    password: '54321'}
)

Gabe = User.create!(
    {email: 'gabe@gmail.com',
    first_name: 'gabe',
    password: 'fghij'}
)

##### creating Product #####

product1 = Product.create!(
    {
        product_name: "Tie-Dye hoodie",
        description: "A must-have item this fall! It's super soft and smooth. You can either wash with hot/warm or cold water. The color won't bleed or fade so hold you worries!",
        price: 68,
    }
)

link1 = open("https://createtsy-products-seeds.s3.amazonaws.com/test.jpg")
product1.photo.attach(io: link1, filename: 'tie_dye_hoodie1.jpg')

###

product2 = Product.create!(
    {
        product_name: "Doraemon Bed Sheet",
        description: "Your child will love this cute Doraemon theme bed sheet. It is made of unique fabric that's breathable and lightweight.",
        price: 57,
    }
)

link2 = open("https://createtsy-products-seeds.s3.amazonaws.com/bed_sheet1.jpg")
product2.photo.attach(io: link2, filename: 'bed_sheet1.jpg')

###

product3 = Product.create!(
    {
        product_name: "Carry-On Luggauge",
        description: "This carry-on is lightweight and sized to fit in the overhead bin of all airplanes. It is easy to bring around with spinner wheels and has an interior compression system to make packing easy.",
        price: 120,
    }
)

link3 = open("https://createtsy-products-seeds.s3.amazonaws.com/carry_on1.jpg")
product3.photo.attach(io: link3, filename: 'carry_on1.jpg')

###

product4 = Product.create!(
    {
        product_name: "Desk Lamp",
        description: "This desk lamp is perfect for late night readings or simply to leave it on to brighten up your space. The brightness is adjustable.",
        price: 70,
    }
)

link4 = open("https://createtsy-products-seeds.s3.amazonaws.com/desk_lamp1.jpg")
product4.photo.attach(io: link4, filename: 'desk_lamp1.jpg')
    
# product5 = Product.create!(
#     {
#         product_name: "Morton floor lamp",
#         description: "Crafted of natural wood, our Morton Floor Lamp brings a casual touch to any space. Whether you want to complete a contemporary room or lend a touch of coastal style to a more traditional space, this lighting is the perfect choice for your home.",
#         price: 249,
#     }
# )

# link5 = open("https://createtsy-products-seeds.s3.amazonaws.com/morton_floor_lamp1.jpg")
# product5.photo.attach(io: link5, filename: 'morton_floor_lamp1.jpg')
        
# product6 = Product.create!(
#     {
#         product_name: "Coffee table",
#         description: 'Made from metal, its frame features a crisscross base in a gold finish for a hint of glam. Up above, the circular top is made from engineered wood with a durable laminate finish that’s versatile enough to mix with most color palettes. This compact 36" diameter piece is the perfect pick for smaller living rooms.',
#         price: 226,
#     }
# )

# link6 = open("https://createtsy-products-seeds.s3.amazonaws.com/coffee_table1.jpg")
# product6.photo.attach(io: link6, filename: 'coffee_table1.jpg')

# product7 = Product.create!(
#     {
#         product_name: "Travel watch holder",
#         description: "Keep your favorite watches safe and protected at home or away with this functional watch roll. This portable case is thoughtfully designed to fit three watches on a padded removable cushion and features a micro suede lining, a double snap closure and a hidden compartment inside for cufflinks or collar stays. Add a foil debossed monogram for a personal touch.",
#         price: 119,
#     }
# )

# link7 = open("https://createtsy-products-seeds.s3.amazonaws.com/watch_holder1.jpg")
# product7.photo.attach(io: link7, filename: 'watch_holder1.jpeg')
    
# product8 = Product.create!(
#     {
#         product_name: "iPad stand",
#         description: "The iPad Stand features clean lines and a modern aesthetic, and is optimized for using on a countertop, table or desk. It works well in both landscape and portrait mode, and is compatible with all generations of iPad as well as most other tablets (can also be used with very slim-fitting cases). Handcrafted from domestically sourced wood, natural variations in texture and color make each piece subtly unique.",
#         price: 52,
#     }
# )

# link8 = open("https://createtsy-products-seeds.s3.amazonaws.com/ipad_stand.jpg")
# product8.photo.attach(io: link8, filename: 'ipad_stand.jpg')
        
# product9 = Product.create!(
#     {
#         product_name: "Brass metal utensils",
#         description: "This bold flatware isn't just for company; the stainless steel core makes it sturdy enough for everyday use while its unique shape makes every meal feel a little special. ",
#         price: 39.50,
#     }
# )

# link9 = open("https://createtsy-products-seeds.s3.amazonaws.com/brass_metal_utensils1.jpg")
# product9.photo.attach(io: link9, filename: 'brass_metal_utensils1.jpg')

# product10 = Product.create!(
#     {
#         product_name: "RGB gaming mouse pad",
#         description: "The micro textured hard surface allows for quick and smooth gliding.  A non-slip rubber base keeps the pad from moving even during fast paced gaming sessions.  The large size allows for plenty of movement.",
#         price: 30,
#     }
# )

# link10 = open("https://createtsy-products-seeds.s3.amazonaws.com/gaming_mouse_pad1.jpg")
# product10.photo.attach(io: link10, filename: 'gaming_mouse_pad1.jpg')
    


## REVIEWS ##

review1 = Review.create(user_id: Lauren.id, product_id: product1.id, body:"Fast shipping and quality product! Perfect item for fall weather to stay cozy.", rating: 5)
review2 = Review.create(user_id: Juju.id, product_id: product3.id, body:"The interior was not up to par. I like the color and the exterior design, but the inside was kind of disappointing.", rating: 3)
review3 = Review.create(user_id: Jin.id, product_id: product2.id, body:"Most adorable bed sheet! It's is very soft and comfy.", rating: 4)

