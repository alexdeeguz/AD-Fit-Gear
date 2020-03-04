import { RECEIVE_ALL_ITEMS } from '../actions/cart_item_actions'


const CartItemsReducer = (state = {}, action) => {
    Object.freeze(state)

    // debugger
    switch (action.type) {
        case RECEIVE_ALL_ITEMS:
            return action.items
        default:
            return state
    }
}

export default CartItemsReducer