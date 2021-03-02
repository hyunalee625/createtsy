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

Austin = User.create!(
    {email: 'austin@gmail.com',
    first_name: 'Austin',
    password: '12345'}
)

Annie = User.create!(
    {email: 'annie@gmail.com',
    first_name: 'Annie',
    password: '67890'}
)

Jessica = User.create!(
    {email: 'jessica@gmail.com',
    first_name: 'Jessica',
    password: '98765'}
)

Tiffany = User.create!(
    {email: 'tiffany@gmail.com',
    first_name: 'Tiffany',
    password: 'asdfg'}
)

##### creating Product #####

product1 = Product.create!(
    {
        product_name: "Tie-Dye Hoodie",
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
        product_name: "Carry-On Luggage",
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
        product_name: "Brass Metal Utensils",
        description: "This bold flatware isn't just for company; the stainless steel core makes it sturdy enough for everyday use while its unique shape makes every meal feel a little special. ",
        price: 39.50,
    }
)

link9 = open("https://createtsy-products-seeds.s3.amazonaws.com/brass_metal_utensils1.jpg")
product9.photo.attach(io: link9, filename: 'brass_metal_utensils1.jpg')

product10 = Product.create!(
    {
        product_name: "RGB Gaming Mouse Pad",
        description: "The micro textured hard surface allows for quick and smooth gliding.  A non-slip rubber base keeps the pad from moving even during fast paced gaming sessions.  The large size allows for plenty of movement.",
        price: 30,
    }
)

link10 = open("https://createtsy-products-seeds.s3.amazonaws.com/gaming_mouse_pad1.jpg")
product10.photo.attach(io: link10, filename: 'gaming_mouse_pad1.jpg')

product11 = Product.create!(
    {
        product_name: "Christmas Doll",
        description: "Get a little festive with these cute dolls. Scandinavian Elf is handcraft with love. It is a unique piece for decorate Christmas festival.",
        price: 42,
    }
)

link11 = open("https://createtsy-products-seeds.s3.amazonaws.com/christmas_doll.jpg")
product11.photo.attach(io: link11, filename: 'christmas_doll.jpg')

product12 = Product.create!(
    {
        product_name: "Bamboo Cutting Board",
        description: "Made of 100% bamboo. It can easily handle the full range of everyday food prep including chopping veggies, slicing bread and trimming meats.",
        price: 16,
    }
)

link12 = open("https://createtsy-products-seeds.s3.amazonaws.com/bambu_cutting_board.png")
product12.photo.attach(io: link12, filename: 'bambu_cutting_board.png')

product13 = Product.create!(
    {
        product_name: "Personalized Robe",
        description: "Our robe is the ultimate lounging accessory for the winter season and beyond. Offered in various colors, you can find one that suits your style and also personalize it. ",
        price: 79,
    }
)

link13 = open("https://createtsy-products-seeds.s3.amazonaws.com/robe.jpg")
product13.photo.attach(io: link13, filename: 'robe.jpg')

product14 = Product.create!(
    {
        product_name: "Glass Water Bottle",
        description: "Inspired by the inevitable and beautiful mist that covers a city that’s never bothered to be like anywhere else.",
        price: 52,
    }
)

link14 = open("https://createtsy-products-seeds.s3.amazonaws.com/glass_water_bottle.jpg")
product14.photo.attach(io: link14, filename: 'glass_water_bottle.jpg')

product15 = Product.create!(
    {
        product_name: "Cable Knit Baby Sweater",
        description: "Cable knit in soft warmth with a brown buttons.",
        price: 39,
    }
)

link15 = open("https://createtsy-products-seeds.s3.amazonaws.com/baby_sweater.jpg")
product15.photo.attach(io: link15, filename: 'baby_sweater.jpg')

product16 = Product.create!(
    {
        product_name: "Velvet Scrunchies",
        description: "The micro textured hard surface allows for quick and smooth gliding.  A non-slip rubber base keeps the pad from moving even during fast paced gaming sessions.  The large size allows for plenty of movement.",
        price: 17,
    }
)

link16 = open("https://createtsy-products-seeds.s3.amazonaws.com/velvet_scrunchies.jpeg")
product16.photo.attach(io: link16, filename: 'velvet_scrunchies.jpeg')

product17 = Product.create!(
    {
        product_name: "Grey Washed Bucket Hat",
        description: "Scrunchies are here to play! Our new scrunchies are the perfect hair accessories for your skincare routine. Super comfy, kink-free, and tug-proof so you can easily tie hair up without damaging it.",
        price: 24,
    }
)

link17 = open("https://createtsy-products-seeds.s3.amazonaws.com/grey_washed_bucket_hat.jpeg")
product17.photo.attach(io: link17, filename: 'grey_washed_bucket_hat.jpeg')

product18 = Product.create!(
    {
        product_name: "Laundry Hamper",
        description: "Finally, a laundry hamper that looks just as good as your clothes do! This design’s braided texture brings airy charm to this everyday essential, while its fibers are mold and water-resistant perfect for stowing just-used towels, wet bathing suits, and beyond on the way to the laundry room.",
        price: 67,
    }
)

link18 = open("https://createtsy-products-seeds.s3.amazonaws.com/laundry_hamper.jpg")
product18.photo.attach(io: link18, filename: 'laundry_hamper.jpg')

product19 = Product.create!(
    {
        product_name: "Pet WaterBottle",
        description: "A wide sink that makes it easier for your fur baby to drink from. It is leakproof and light to bring everywhere with you!",
        price: 27,
    }
)

link19 = open("https://createtsy-products-seeds.s3.amazonaws.com/pet_water_bottle.jpg")
product19.photo.attach(io: link19, filename: 'pet_water_bottle.jpg')

product20 = Product.create!(
    {
        product_name: "Chocolate Covered Strawberries",
        description: "ipped and Drizzled Strawberries. What better way to eat chocolate and strawberries than dipping strawberries in chocolate!",
        price: 29,
    }
)

link20 = open("https://createtsy-products-seeds.s3.amazonaws.com/chocolate_covered_strawberries.jpg")
product20.photo.attach(io: link20, filename: 'chocolate_covered_strawberries.jpg')



## REVIEWS ##

review1 = Review.create(user_id: Lauren.id, product_id: product1.id, body:"Fast shipping and quality product! Perfect item for fall weather to stay cozy.", rating: 4)
review6 = Review.create(user_id: Lauren.id, product_id: product6.id, body:"Bought a couple of sets to host dinner parties and received so many compliments on these!", rating: 5)
review11 = Review.create(user_id: Lauren.id, product_id: product11.id, body:"These dolls were the highlight of this year's christmas decoration. Going to resue them next year.", rating: 4)
review16 = Review.create(user_id: Lauren.id, product_id: product16.id, body:"There were signs of wear and tear.", rating: 1)

review2 = Review.create(user_id: Juju.id, product_id: product2.id, body:"The interior was not up to par. I like the color and the exterior design, but the inside, not so much.", rating: 3)
review7 = Review.create(user_id: Juju.id, product_id: product7.id, body:"Looks nice, but the quality isn't as expected.", rating: 2)
review12 = Review.create(user_id: Juju.id, product_id: product12.id, body:"Really great for cutting steak, fruits, and overall anything. Durable and easy to wash.", rating: 5)
review17 = Review.create(user_id: Juju.id, product_id: product17.id, body:"It was a good buy. Just what I was looking for.", rating: 4)

review3 = Review.create(user_id: Jin.id, product_id: product3.id, body:"Most adorable bed sheet! It's is very soft and comfy.", rating: 4)
review8 = Review.create(user_id: Jin.id, product_id: product8.id, body:"Delivery process was very very disappointing! The glass was BROKEN.", rating: 1)
review13 = Review.create(user_id: Jin.id, product_id: product13.id, body:"Personalization made this robe special. Happy to have found the one.", rating: 4)
review18 = Review.create(user_id: Jin.id, product_id: product18.id, body:"The handle fell off.", rating: 1)

review4 = Review.create(user_id: Dan.id, product_id: product4.id, body:"Reading a book in bed has gotten better, but I wish it has a dimmer.", rating: 3)
review9 = Review.create(user_id: Dan.id, product_id: product9.id, body:"Durable and easy to clean and store. I pack lunch to work every day and it's been a great purchase so far.", rating: 5)
review14 = Review.create(user_id: Dan.id, product_id: product14.id, body:"Experienced some leaks, but the design is cool. Still waiting on a new one.", rating: 3)
review19 = Review.create(user_id: Dan.id, product_id: product19.id, body:"The buttons were hard to press. It wasn't worht the price.", rating: 2)

review10 = Review.create(user_id: Gabe.id, product_id: product10.id, body:"The color of this keyboard is sick! Kind of hard to press the keys tho.", rating: 4)
review5 = Review.create(user_id: Gabe.id, product_id: product5.id, body:"I love FRIENDS!! I put store-bought cookies in this jar as well. The cookies stay fresh for at least a week.", rating: 5)
review15 = Review.create(user_id: Gabe.id, product_id: product15.id, body:"Bought it for my baby niece. The fabric is great.", rating: 5)
review20 = Review.create(user_id: Gabe.id, product_id: product20.id, body:"Ordered a dozen, but only received 6. Customer service followed up and sent me a brand new box.", rating: 3)

review21 = Review.create(user_id: Austin.id, product_id: product6.id, body:"Add to your cart now!", rating: 5)
review22 = Review.create(user_id: Austin.id, product_id: product12.id, body:"Bought it for my girlfriend and she was very pleased with it", rating: 5)
review23 = Review.create(user_id: Austin.id, product_id: product17.id, body:"Wish the size was bigger. Didn't fit right :(", rating: 2)
review24 = Review.create(user_id: Austin.id, product_id: product9.id, body:"It was too heavy to use. Had to return them.", rating: 2)

review25 = Review.create(user_id: Annie.id, product_id: product18.id, body:"Just after a month of use, there are some tears already, but it does its job.", rating: 4)
review26 = Review.create(user_id: Annie.id, product_id: product13.id, body:"Ordered a set for my sister and myself. The quality is top notch and super comfy!", rating: 5)
review27 = Review.create(user_id: Annie.id, product_id: product4.id, body:"The quality was not up to par for the price.", rating: 3)
review28 = Review.create(user_id: Annie.id, product_id: product20.id, body:"They looked delicious, but some of the strawberries went bad when we received it.", rating: 2)

review29 = Review.create(user_id: Jessica.id, product_id: product1.id, body:"The color came off. Very disappointing!!", rating: 1)
review30 = Review.create(user_id: Jessica.id, product_id: product8.id, body:"It goes well great with the other furnitures in my living room.", rating: 4)
review31 = Review.create(user_id: Jessica.id, product_id: product14.id, body:"It leaked in my bag and got everything wet. I gave two stars only because the customer service was great and sent me a brand new one.", rating: 2)
review32 = Review.create(user_id: Jessica.id, product_id: product16.id, body:"A fashion statement you need!", rating: 5)

review33 = Review.create(user_id: Tiffany.id, product_id: product7.id, body:"Been really into nature-esque feel. Not the best one out there, but it's good for now.", rating: 3)
review34 = Review.create(user_id: Tiffany.id, product_id: product2.id, body:"Got it for my nephew for his birthday, but it's not soft. Had to return", rating: 3)
review35 = Review.create(user_id: Tiffany.id, product_id: product15.id, body:"Friend's baby looked absolutely adorable in this sweater! Must get!", rating: 5)
review36 = Review.create(user_id: Tiffany.id, product_id: product10.id, body:"As a gamer, this is just what I needed.", rating: 4)