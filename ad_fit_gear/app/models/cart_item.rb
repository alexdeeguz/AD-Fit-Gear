# == Schema Information
#
# Table name: cart_items
#
#  id          :bigint           not null, primary key
#  product_id  :integer
#  cart_id     :integer
#  size        :string
#  quantity    :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  category_id :integer
#
class CartItem < ApplicationRecord

    belongs_to :product,
        foreign_key: :product_id,
        class_name: :Product

    belongs_to :cart,
        foreign_key: :cart_id,
        class_name: :Cart
end
