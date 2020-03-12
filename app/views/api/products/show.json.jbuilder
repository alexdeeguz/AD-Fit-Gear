json.extract! @product, :id, :name, :price, :description, :category_id

if @product.photos.attached?
    json.photoUrls @product.photos.map { |file| url_for(file)}
end

