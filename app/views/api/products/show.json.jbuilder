json.extract! @product[0], :id, :name, :price, :description, :category_id
if @product[0].photos.attached?
    # json.photoUrl url_for(@product[0].photos)
    json.photoUrls @product[0].photos.map { |file| url_for(file)}
end

