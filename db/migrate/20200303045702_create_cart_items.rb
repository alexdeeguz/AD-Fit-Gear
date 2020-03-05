class CreateCartItems < ActiveRecord::Migration[5.2]
  def change
    create_table :cart_items do |t|
      t.integer :product_id
      t.integer :cart_id
      t.string :size
      t.integer :quantity

      t.timestamps
    end
  end
end
