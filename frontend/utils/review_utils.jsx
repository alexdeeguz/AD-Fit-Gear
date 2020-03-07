export const getAllReviews = (categoryId, productId) => (
    $.ajax({
        url: `/api/categories/${categoryId}/products/${productId}/reviews`,
        method: "GET"
    })
)

export const postReview = (categoryId, productId, review) => (
    $.ajax({
        url: `/api/categories/${categoryId}/products/${productId}/reviews`,
        method: "POST",
        data: {
            review: review
        }
    })
)