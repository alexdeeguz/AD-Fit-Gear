import * as cartAPIUtil from '../utils/cart_utils'

export const RECEIVE_CART = "RECEIVE_CART"

const receiveCart = cart => ({
    type: RECEIVE_CART,
    cart
})

export const getCart = id => dispatch => cartAPIUtil.getCart(id)
    .then(cart => dispatch(receiveCart(cart)))
