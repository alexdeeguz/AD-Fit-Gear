import * as cartAPIUtil from '../utils/cart_item_utils'

export const RECEIVE_ALL_ITEMS = "RECEIVE_ALL_ITEMS"


const receiveAllCartItems = (items) => ({
    type: RECEIVE_ALL_ITEMS,
    items
})

export const getCartItems = () => dispatch => cartAPIUtil.getCartItems()
    .then(items => dispatch(receiveAllCartItems(items)))
