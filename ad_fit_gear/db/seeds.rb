# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

User.create(username: "alex", password: "password")
User.create(username: "test", password: "password")


Category.destroy_all

Category.create(name: 'tanks')
Category.create(name: 'shirts')
Category.create(name: 'hoodies')
Category.create(name: 'joggers')
Category.create(name: 'hats')
Category.create(name: 'gear')

Product.destroy_all

Product.create(name: "black tank", price: 29.99, description: "aesthetic af", category_id: 1)
Product.create(name: "white tank", price: 29.99, description: "plain", category_id: 1)
Product.create(name: "black stringer", price: 29.99, description: "don't wear this if you're small", category_id: 1)
Product.create(name: "white stringer", price: 29.99, description: "wear this if you want to show off", category_id: 1)
Product.create(name: "black cutoff", price: 29.99, description: "wear this if you want to show off", category_id: 1)
Product.create(name: "white cutoff", price: 29.99, description: "wear this if you want to show off", category_id: 1)
Product.create(name: "black cutoff", price: 29.99, description: "wear this if you want to show off", category_id: 1)
Product.create(name: "white cutoff", price: 29.99, description: "wear this if you want to show off", category_id: 1)

Product.create(name: "black shirt", price: 29.99, description: "aesthetic af", category_id: 2)
Product.create(name: "white shirt", price: 29.99, description: "aesthetic af", category_id: 2)
Product.create(name: "purple shirt", price: 29.99, description: "aesthetic af", category_id: 2)
Product.create(name: "random shirt", price: 29.99, description: "aesthetic af", category_id: 2)
Product.create(name: "big shirt", price: 29.99, description: "aesthetic af", category_id: 2)
Product.create(name: "small shirt", price: 29.99, description: "aesthetic af", category_id: 2)
Product.create(name: "whatever shirt", price: 29.99, description: "aesthetic af", category_id: 2)
Product.create(name: "yee shirt", price: 29.99, description: "aesthetic af", category_id: 2)

Product.create(name: "black hoodie", price: 29.99, description: "aesthetic af", category_id: 3)
Product.create(name: "white hoodie", price: 29.99, description: "aesthetic af", category_id: 3)
Product.create(name: "purple hoodie", price: 29.99, description: "aesthetic af", category_id: 3)
Product.create(name: "random hoodie", price: 29.99, description: "aesthetic af", category_id: 3)
Product.create(name: "big hoodie", price: 29.99, description: "aesthetic af", category_id: 3)
Product.create(name: "small hoodie", price: 29.99, description: "aesthetic af", category_id: 3)
Product.create(name: "whatever hoodie", price: 29.99, description: "aesthetic af", category_id: 3)
Product.create(name: "yee hoodie", price: 29.99, description: "aesthetic af", category_id: 3)

Product.create(name: "black joggers", price: 29.99, description: "aesthetic af", category_id: 4)
Product.create(name: "white joggers", price: 29.99, description: "aesthetic af", category_id: 4)
Product.create(name: "purple joggers", price: 29.99, description: "aesthetic af", category_id: 4)
Product.create(name: "random joggers", price: 29.99, description: "aesthetic af", category_id: 4)
Product.create(name: "big joggers", price: 29.99, description: "aesthetic af", category_id: 4)
Product.create(name: "small joggers", price: 29.99, description: "aesthetic af", category_id: 4)
Product.create(name: "whatever joggers", price: 29.99, description: "aesthetic af", category_id: 4)
Product.create(name: "yee joggers", price: 29.99, description: "aesthetic af", category_id: 4)


Product.create(name: "black hat", price: 29.99, description: "aesthetic af", category_id: 5)
Product.create(name: "white hat", price: 29.99, description: "aesthetic af", category_id: 5)
Product.create(name: "purple hat", price: 29.99, description: "aesthetic af", category_id: 5)
Product.create(name: "random hat", price: 29.99, description: "aesthetic af", category_id: 5)
Product.create(name: "big hat", price: 29.99, description: "aesthetic af", category_id: 5)
Product.create(name: "small hat", price: 29.99, description: "aesthetic af", category_id: 5)
Product.create(name: "whatever hat", price: 29.99, description: "aesthetic af", category_id: 5)
Product.create(name: "yee hat", price: 29.99, description: "aesthetic af", category_id: 5)


Product.create(name: "black gear", price: 29.99, description: "aesthetic af", category_id: 6)
Product.create(name: "white gear", price: 29.99, description: "aesthetic af", category_id: 6)
Product.create(name: "purple gear", price: 29.99, description: "aesthetic af", category_id: 6)
Product.create(name: "random gear", price: 29.99, description: "aesthetic af", category_id: 6)
Product.create(name: "big gear", price: 29.99, description: "aesthetic af", category_id: 6)
Product.create(name: "small gear", price: 29.99, description: "aesthetic af", category_id: 6)
Product.create(name: "whatever gear", price: 29.99, description: "aesthetic af", category_id: 6)
Product.create(name: "yee gear", price: 29.99, description: "aesthetic af", category_id: 6)

Cart.destroy_all

Cart.create(user_id: 1)
Cart.create(user_id: 2)

CartItem.destroy_all

CartItem.create(product_id: 1, category_id: 1, cart_id: 1, quantity: 1)
CartItem.create(product_id: 2, category_id: 1, cart_id: 1, quantity: 1)
CartItem.create(product_id: 3, category_id: 1, cart_id: 1, quantity: 1)


