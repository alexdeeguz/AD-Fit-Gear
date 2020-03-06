# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

u1 = User.create(username: "alex", password: "password")
u2 = User.create(username: "test", password: "password")


Category.destroy_all

c1 = Category.create(name: 'tanks')
c2 = Category.create(name: 'shirts')
c3 = Category.create(name: 'hoodies')
c4 = Category.create(name: 'joggers')
c5 = Category.create(name: 'hats')
c6 = Category.create(name: 'gear')

Product.destroy_all

p1 = Product.create(name: "black tank", price: 29.99, description: "aesthetic af", category_id: c1.id)
p2 = Product.create(name: "white tank", price: 29.99, description: "plain", category_id: c1.id)
p3 = Product.create(name: "black stringer", price: 29.99, description: "don't wear this if you're small", category_id: c1.id)
p4 = Product.create(name: "white stringer", price: 29.99, description: "wear this if you want to show off", category_id: c1.id)
p5 = Product.create(name: "black cutoff", price: 29.99, description: "wear this if you want to show off", category_id: c1.id)
p6 = Product.create(name: "white cutoff", price: 29.99, description: "wear this if you want to show off", category_id: c1.id)
p7 = Product.create(name: "black cutoff", price: 29.99, description: "wear this if you want to show off", category_id: c1.id)
p8 = Product.create(name: "white cutoff", price: 29.99, description: "wear this if you want to show off", category_id: c1.id)

p9 = Product.create(name: "black shirt", price: 29.99, description: "aesthetic af", category_id: c2.id)
p10 = Product.create(name: "white shirt", price: 29.99, description: "aesthetic af", category_id: c2.id)
p11 = Product.create(name: "purple shirt", price: 29.99, description: "aesthetic af", category_id: c2.id)
p12 = Product.create(name: "random shirt", price: 29.99, description: "aesthetic af", category_id: c2.id)
p13 = Product.create(name: "big shirt", price: 29.99, description: "aesthetic af", category_id: c2.id)
p14 = Product.create(name: "small shirt", price: 29.99, description: "aesthetic af", category_id: c2.id)
p15 = Product.create(name: "whatever shirt", price: 29.99, description: "aesthetic af", category_id: c2.id)
p16 = Product.create(name: "yee shirt", price: 29.99, description: "aesthetic af", category_id: c2.id)

p17 =Product.create(name: "black hoodie", price: 29.99, description: "aesthetic af", category_id: c3.id)
p18 =Product.create(name: "white hoodie", price: 29.99, description: "aesthetic af", category_id: c3.id)
p19 =Product.create(name: "purple hoodie", price: 29.99, description: "aesthetic af", category_id: c3.id)
p20 =Product.create(name: "random hoodie", price: 29.99, description: "aesthetic af", category_id: c3.id)
p21 =Product.create(name: "big hoodie", price: 29.99, description: "aesthetic af", category_id: c3.id)
p22 =Product.create(name: "small hoodie", price: 29.99, description: "aesthetic af", category_id: c3.id)
p23 =Product.create(name: "whatever hoodie", price: 29.99, description: "aesthetic af", category_id: c3.id)
p24 =Product.create(name: "yee hoodie", price: 29.99, description: "aesthetic af", category_id: c3.id)

p25 =Product.create(name: "black joggers", price: 29.99, description: "aesthetic af", category_id: c4.id)
p26 =Product.create(name: "white joggers", price: 29.99, description: "aesthetic af", category_id: c4.id)
p27 =Product.create(name: "purple joggers", price: 29.99, description: "aesthetic af", category_id: c4.id)
p28 =Product.create(name: "random joggers", price: 29.99, description: "aesthetic af", category_id: c4.id)
p29 =Product.create(name: "big joggers", price: 29.99, description: "aesthetic af", category_id: c4.id)
p30 =Product.create(name: "small joggers", price: 29.99, description: "aesthetic af", category_id: c4.id)
p31 =Product.create(name: "whatever joggers", price: 29.99, description: "aesthetic af", category_id: c4.id)
p32 =Product.create(name: "yee joggers", price: 29.99, description: "aesthetic af", category_id: c4.id)


p33 =Product.create(name: "black hat", price: 29.99, description: "aesthetic af", category_id: c5.id)
p34 =Product.create(name: "white hat", price: 29.99, description: "aesthetic af", category_id: c5.id)
p35 =Product.create(name: "purple hat", price: 29.99, description: "aesthetic af", category_id: c5.id)
p36 =Product.create(name: "random hat", price: 29.99, description: "aesthetic af", category_id: c5.id)
p37 =Product.create(name: "big hat", price: 29.99, description: "aesthetic af", category_id: c5.id)
p38 =Product.create(name: "small hat", price: 29.99, description: "aesthetic af", category_id: c5.id)
p39 =Product.create(name: "whatever hat", price: 29.99, description: "aesthetic af", category_id: c5.id)
p40 =Product.create(name: "yee hat", price: 29.99, description: "aesthetic af", category_id: c5.id)


p41 =Product.create(name: "black gear", price: 29.99, description: "aesthetic af", category_id: c6.id)
p42 =Product.create(name: "white gear", price: 29.99, description: "aesthetic af", category_id: c6.id)
p43 =Product.create(name: "purple gear", price: 29.99, description: "aesthetic af", category_id: c6.id)
p44 =Product.create(name: "random gear", price: 29.99, description: "aesthetic af", category_id: c6.id)
p45 =Product.create(name: "big gear", price: 29.99, description: "aesthetic af", category_id: c6.id)
p46 =Product.create(name: "small gear", price: 29.99, description: "aesthetic af", category_id: c6.id)
p47 =Product.create(name: "whatever gear", price: 29.99, description: "aesthetic af", category_id: c6.id)
p48 =Product.create(name: "yee gear", price: 29.99, description: "aesthetic af", category_id: c6.id)

Cart.destroy_all

ca1 = Cart.create(user_id: u1.id)
ca2 = Cart.create(user_id: u2.id)

CartItem.destroy_all

CartItem.create(product_id: p1.id, category_id: c1.id, cart_id: ca1.id, quantity: 1, size: "M")
CartItem.create(product_id: p2.id, category_id: c1.id, cart_id: ca1.id, quantity: 1, size: "M")
CartItem.create(product_id: p3.id, category_id: c1.id, cart_id: ca1.id, quantity: 1, size: "L")
CartItem.create(product_id: p10.id, category_id: c2.id, cart_id: ca1.id, quantity: 3, size: "L")



