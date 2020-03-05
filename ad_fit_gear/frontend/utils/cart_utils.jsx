export const getCart = (id) => (
    $.ajax({
        url: `/api/cart/${id}`,
        method: "GET"
    })
)