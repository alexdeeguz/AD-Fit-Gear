# == Schema Information
#
# Table name: products
#
#  id          :bigint           not null, primary key
#  name        :string
#  price       :decimal(, )
#  description :string
#  category_id :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Product < ApplicationRecord
    validates :name, :price, :category_id, presence: true

    has_many :cart_items,
        foreign_key: :product_id,
        class_name: :CartItem

    has_many :reviews,
        foreign_key: :product_id,
        class_name: :Review

    has_one_attached :photo
end
