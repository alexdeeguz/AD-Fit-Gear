json.extract! @cart_item, :id, :product_id, :cart_id, :product, :size, :quantity
if @cart_item.product.photos.attached?
    json.photoUrls @cart_item.product.photos.map { |file| url_for(file) }
end

