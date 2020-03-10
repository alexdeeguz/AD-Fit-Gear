@products.each do |product|
    json.set! product.id do
        json.extract! product, :id, :name, :price, :description, :category_id
        # if product.photo.attached?
        #     json.photoUrl url_for(product.photo)
        # end
        if product.photos.attached?
            json.photoUrls product.photos.map { |file| url_for(file) }
        end
    end
end