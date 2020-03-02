export const getProducts = (categoryId) => (
    $.ajax({
        url: `/api/categories/${categoryId}/products`,
        method: "GET"
    })
)

export const getProduct = (categoryId, productId) => (
    $.ajax({
        url: `/api/categories/${categoryId}/products/${productId}`,
        method: "GET"
    })
) 

export const getCategory = (categoryId, productId) => (
    $.ajax({
        url: `/api/categories/${categoryId}/products/${productId}`,
        method: "GET"
    })
)