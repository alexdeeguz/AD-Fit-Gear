# == Schema Information
#
# Table name: cart_items
#
#  id         :bigint           not null, primary key
#  product_id :integer
#  cart_id    :integer
#  size       :string
#  quantity   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
require 'test_helper'

class CartItemTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
