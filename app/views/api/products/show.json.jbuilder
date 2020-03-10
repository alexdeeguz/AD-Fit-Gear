json.extract! @product[0], :id, :name, :price, :description, :category_id
if @product[0].photo.attached?
    json.photoUrl url_for(@product[0].photo)
end