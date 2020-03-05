import { RECEIVE_ALL_ITEMS, REMOVE_CART_ITEM, RECEIVE_CART_ITEM } from '../actions/cart_item_actions'


const CartItemsReducer = (state = {}, action) => {
    Object.freeze(state)
    const newState = Object.assign({}, state)

    switch (action.type) {
        case RECEIVE_ALL_ITEMS:
            return action.items
        case REMOVE_CART_ITEM:
            delete newState[action.id] 
            return newState
        case RECEIVE_CART_ITEM:
            newState[action.item.id] = action.item
            return newState
        default:
            return state
    }
}

export default CartItemsReducer