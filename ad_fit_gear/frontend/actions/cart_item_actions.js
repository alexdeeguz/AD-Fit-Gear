import * as cartAPIUtil from '../utils/cart_item_utils'

export const RECEIVE_ALL_ITEMS = "RECEIVE_ALL_ITEMS"
export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM"
export const RECEIVE_CART_ITEM = "RECEIVE_CART_ITEM"

const receiveAllCartItems = (items) => ({
    type: RECEIVE_ALL_ITEMS,
    items
})

const removeCartItem = id => ({
    type: REMOVE_CART_ITEM,
    id
})

const receiveCartItem = item => ({
    type: RECEIVE_CART_ITEM,
    item
})

export const getCartItems = () => dispatch => cartAPIUtil.getCartItems()
    .then(items => dispatch(receiveAllCartItems(items)))

export const deleteCartItem = id => dispatch => cartAPIUtil.removeCartItem(id)
    .then(() => dispatch(removeCartItem(id)))

export const addToCart = (productId, cartId, size, quantity) => dispatch => 
    cartAPIUtil.addCartItem(productId, cartId, size, quantity)
    .then(createdItem => dispatch(receiveCartItem(createdItem)))
