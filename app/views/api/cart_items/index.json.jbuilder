@cart_items.each do |product|
    json.set! product.id do
        json.extract! product, :id, :product_id, :product, :size, :quantity
        # json.extract! product, :id, :name, :price, :description, :category_id
    end
end