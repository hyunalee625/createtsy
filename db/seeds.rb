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
    first_name: 'Lauren',
    password: 'abcde'}
)

Juju = User.create!(
    {email: 'juju@gmail.com',
    first_name: 'Juju',
    password: '12345'}
)

Jin = User.create!(
    {email: 'jinjin@gmail.com',
    first_name: 'Jin',
    password: '98765'}
)

Dan = User.create!(
    {email: 'dan@gmail.com',
    first_name: 'Dan',
    password: '54321'}
)

Gabe = User.create!(
    {email: 'gabe@gmail.com',
    first_name: 'Gabe',
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
    
product5 = Product.create!(
    {
        product_name: "Central Perk Cookie Jar",
        description: "Bake cookies and keep them in this FRIENDS themed cookie jar. This tightly sealed jar will keep your cookies fresh for a while. We bet Monica would love this one!",
        price: 35,
    }
)

link5 = open("https://createtsy-products-seeds.s3.amazonaws.com/cookie_jar.jpeg")
product5.photo.attach(io: link5, filename: 'cookie_jar.jpg')
        
product6 = Product.create!(
    {
        product_name: "Swarovski Champagne Glass Set of 2",
        description: 'An elegant touch of Swarovski crystal base. Gold crystals are also inside the stem giving it a pop. Great for parties, date nights, etc!',
        price: 400,
    }
)

link6 = open("https://createtsy-products-seeds.s3.amazonaws.com/swarovski_champagne_glasses.jpeg")
product6.photo.attach(io: link6, filename: 'swarovski_champagne_glass.jpg')

product7 = Product.create!(
    {
        product_name: "Faux Potted Succulent",
        description: "Always on trend, succulents instantly add life to any space. Potted in a ceramic container, you'd never know this Trailing Succulent is faux. It’ll look fresh year round, and best of all—you never have to water it.",
        price: 27,
    }
)

link7 = open("https://createtsy-products-seeds.s3.amazonaws.com/faux_succulent.jpg")
product7.photo.attach(io: link7, filename: 'faux_succulent.jpeg')
    
product8 = Product.create!(
    {
        product_name: "Glass/Metal Coffee Table",
        description: "A gorgeous coffee table that makes your home cozy, or stylish, or anyway you want it to look.",
        price: 350,
    }
)

link8 = open("https://createtsy-products-seeds.s3.amazonaws.com/glass_coffee_table.jpg")
product8.photo.attach(io: link8, filename: 'glass_coffee_table.jpg')
        
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
    


## REVIEWS ##

review1 = Review.create(user_id: Lauren.id, product_id: product1.id, body:"Fast shipping and quality product! Perfect item for fall weather to stay cozy.", rating: 4)
review2 = Review.create(user_id: Juju.id, product_id: product2.id, body:"The interior was not up to par. I like the color and the exterior design, but the inside, not so much.", rating: 3)
review3 = Review.create(user_id: Jin.id, product_id: product3.id, body:"Most adorable bed sheet! It's is very soft and comfy.", rating: 4)
review4 = Review.create(user_id: Dan.id, product_id: product4.id, body:"Reading a book in bed has gotten better, but I wish it has a dimmer.", rating: 3)
review5 = Review.create(user_id: Gabe.id, product_id: product5.id, body:"I love FRIENDS!! I put store-bought cookies in this jar as well. The cookies stay fresh for at least a week.", rating: 5)
review6 = Review.create(user_id: Lauren.id, product_id: product6.id, body:"Bought a couple of sets to host dinner parties and received so many compliments on these!", rating: 5)
review7 = Review.create(user_id: Juju.id, product_id: product7.id, body:"Looks nice, but the quality isn't as expected.", rating: 2)
review8 = Review.create(user_id: Jin.id, product_id: product8.id, body:"Delivery process was very very disappointing! The glass was BROKEN.", rating: 1)
review9 = Review.create(user_id: Dan.id, product_id: product9.id, body:"Durable and easy to clean and store. I pack lunch to work every day and it's been a great purchase so far.", rating: 5)
review10 = Review.create(user_id: Gabe.id, product_id: product10.id, body:"The color of this keyboard is sick! Kind of hard to press the keys tho.", rating: 4)

