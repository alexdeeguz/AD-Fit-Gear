import { RECEIVE_CART } from '../actions/cart_actions'


const CartReducer = (state = {}, action) => {
    Object.freeze(state)
    const newState = Object.assign({}, state)

    switch (action.type) {
        case RECEIVE_CART:
            newState[action.cart.id] = action.cart
            return newState
        default:
            return state
    }
}

export default CartReducer