# == Schema Information
#
# Table name: reviews
#
#  id         :bigint           not null, primary key
#  rating     :integer
#  body       :string
#  user_id    :integer
#  product_id :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Review < ApplicationRecord

    validates :rating, :body, presence: true

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User 

    belongs_to :product,
        foreign_key: :product_id,
        class_name: :Product
end
