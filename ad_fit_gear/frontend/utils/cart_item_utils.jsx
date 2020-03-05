export const getCartItems = () => (
    $.ajax({
        url: "/api/cart_items",
        method: "GET"
    })
)

export const removeCartItem = id => (
    $.ajax({
        url: `/api/cart_items/${id}`,
        method: "DELETE"
    })
) 

export const addCartItem = (productId, cartId, size, quantity) => (
    $.ajax({
        url: "/api/cart_items",
        method: "POST",
        data: {
            cart_item: {
                product_id: productId,
                cart_id: cartId,
                size: size,
                quantity: quantity
            }
        }
    })
)