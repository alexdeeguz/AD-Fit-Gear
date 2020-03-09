# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

u1 = User.create(username: "alex", password: "password")


Category.destroy_all

c1 = Category.create(name: 'tanks')
c2 = Category.create(name: 'shirts')
c3 = Category.create(name: 'hoodies')
c4 = Category.create(name: 'joggers')
c5 = Category.create(name: 'hats')
c6 = Category.create(name: 'gear')

Product.destroy_all

p1 = Product.create(name: "black tank", price: 29.99, description: "100% aesthetic", category_id: c1.id)
p2 = Product.create(name: "white tank", price: 29.99, description: "100% aesthetic", category_id: c1.id)
p3 = Product.create(name: "red tank", price: 29.99, description: "100% aesthetic", category_id: c1.id)
p4 = Product.create(name: "gray tank", price: 29.99, description: "100% aesthetic", category_id: c1.id)
p5 = Product.create(name: "black stringer", price: 29.99, description: "woah woah woah", category_id: c1.id)
p6 = Product.create(name: "white stringer", price: 29.99, description: "woah woah woah", category_id: c1.id)
p7 = Product.create(name: "black cutoff", price: 29.99, description: "100% aesthetic", category_id: c1.id)
p8 = Product.create(name: "white cutoff", price: 29.99, description: "100% aesthetic", category_id: c1.id)

p9 = Product.create(name: "black shirt", price: 29.99, description: "100% aesthetic", category_id: c2.id)
p10 = Product.create(name: "white shirt", price: 29.99, description: "100% aesthetic", category_id: c2.id)
p11 = Product.create(name: "purple shirt", price: 29.99, description: "100% aesthetic", category_id: c2.id)
p12 = Product.create(name: "gray shirt", price: 29.99, description: "100% aesthetic", category_id: c2.id)
p13 = Product.create(name: "red shirt", price: 29.99, description: "100% aesthetic", category_id: c2.id)
p14 = Product.create(name: "blue shirt", price: 29.99, description: "100% aesthetic", category_id: c2.id)
p15 = Product.create(name: "burgundy shirt", price: 29.99, description: "100% aesthetic", category_id: c2.id)
p16 = Product.create(name: "green shirt", price: 29.99, description: "100% aesthetic", category_id: c2.id)

p17 =Product.create(name: "black hoodie", price: 49.99, description: "hoodie hoodie hoodie", category_id: c3.id)
p18 =Product.create(name: "white hoodie", price: 49.99, description: "hoodie hoodie hoodie", category_id: c3.id)
p19 =Product.create(name: "purple hoodie", price: 49.99, description: "hoodie hoodie hoodie", category_id: c3.id)
p20 =Product.create(name: "gray hoodie", price: 49.99, description: "hoodie hoodie hoodie", category_id: c3.id)
p21 =Product.create(name: "red hoodie", price: 49.99, description: "hoodie hoodie hoodie", category_id: c3.id)
p22 =Product.create(name: "blue hoodie", price: 49.99, description: "hoodie hoodie hoodie", category_id: c3.id)
p23 =Product.create(name: "burgundy hoodie", price: 49.99, description: "hoodie hoodie hoodie", category_id: c3.id)
p24 =Product.create(name: "green hoodie", price: 49.99, description: "hoodie hoodie hoodie", category_id: c3.id)

p25 =Product.create(name: "black joggers", price: 49.99, description: "aestheticccccc", category_id: c4.id)
p26 =Product.create(name: "white joggers", price: 49.99, description: "aestheticccccc", category_id: c4.id)
p27 =Product.create(name: "purple joggers", price: 49.99, description: "aestheticccccc", category_id: c4.id)
p28 =Product.create(name: "gray joggers", price: 49.99, description: "aestheticccccc", category_id: c4.id)
p29 =Product.create(name: "red joggers", price: 49.99, description: "aestheticccccc", category_id: c4.id)
p30 =Product.create(name: "blue joggers", price: 49.99, description: "aestheticccccc", category_id: c4.id)
p31 =Product.create(name: "burgundy joggers", price: 49.99, description: "aestheticccccc", category_id: c4.id)
p32 =Product.create(name: "camo joggers", price: 49.99, description: "aestheticccccc", category_id: c4.id)


p33 =Product.create(name: "black hat", price: 9.99, description: "a black hat", category_id: c5.id)
p34 =Product.create(name: "white hat", price: 9.99, description: "a white hat", category_id: c5.id)
p35 =Product.create(name: "purple hat", price: 9.99, description: "a purple hat", category_id: c5.id)
p36 =Product.create(name: "random hat", price: 9.99, description: "a random hat", category_id: c5.id)
p37 =Product.create(name: "big hat", price: 9.99, description: "a big hat", category_id: c5.id)
p38 =Product.create(name: "small hat", price: 9.99, description: "a small hat", category_id: c5.id)
p39 =Product.create(name: "crazy hat", price: 9.99, description: "a crazy hat", category_id: c5.id)
p40 =Product.create(name: "hat", price: 1.99, description: "just a hat", category_id: c5.id)


p41 =Product.create(name: "black belt", price: 79.99, description: "don't break your back", category_id: c6.id)
p42 =Product.create(name: "purple belt", price: 79.99, description: "don't break your back", category_id: c6.id)
p43 =Product.create(name: "black knee straps", price: 19.99, description: "increase your squat 999 pounds", category_id: c6.id)
p44 =Product.create(name: "red knee straps", price: 19.99, description: "increase your squat 999 pounds", category_id: c6.id)
p45 =Product.create(name: "black knee sleeves", price: 29.99, description: "increase your squat 999 pounds", category_id: c6.id)
p46 =Product.create(name: "red knee sleeves", price: 29.99, description: "increase your squat 999 pounds", category_id: c6.id)
p47 =Product.create(name: "black wrist wraps", price: 19.99, description: "wrist wraps are good", category_id: c6.id)
p48 =Product.create(name: "red wrist wraps", price: 19.99, description: "wrist wraps are good", category_id: c6.id)

Cart.destroy_all

ca1 = Cart.create(user_id: u1.id)

CartItem.destroy_all

Review.destroy_all




