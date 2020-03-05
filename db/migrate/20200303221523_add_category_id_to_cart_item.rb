class AddCategoryIdToCartItem < ActiveRecord::Migration[5.2]
  def change
    add_column :cart_items, :category_id, :integer
  end
end
