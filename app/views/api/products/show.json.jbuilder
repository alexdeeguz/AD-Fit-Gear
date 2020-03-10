json.extract! @product, :id, :name, :price, :description, :category_id
if @product.photos.attached?
    # json.photoUrl url_for(@product[0].photos)
    json.photoUrls @product.photos.map { |file| url_for(file)}
end

