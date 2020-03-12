@cart_items.each do |product|
    json.set! product.id do
        json.extract! product, :id, :product_id, :product, :size, :quantity
        if product.product.photos.attached?
            json.photoUrls product.product.photos.map { |file| url_for(file) }
        end
        
    end
end
