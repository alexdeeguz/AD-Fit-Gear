json.extract! @cart_item, :id, :product_id, :cart_id, :product, :size, :quantity
# json.product 




# json.extract! @product[0], :id, :name, :price, :description, :category_id
# if :product.photos.attached?
#     # json.photoUrl url_for(@product[0].photos)
#     json.photoUrls :product.photos.map { |file| url_for(file)}
# end
