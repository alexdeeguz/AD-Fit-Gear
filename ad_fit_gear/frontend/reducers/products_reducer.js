import { RECEIVE_ALL_PRODUCTS, RECEIVE_PRODUCT } from '../actions/product_actions'


const ProductsReducer = (state = {}, action) => {
    Object.freeze(state)
    const newState = Object.assign({}, state)

    switch (action.type) {
        case RECEIVE_ALL_PRODUCTS:
            return action.products
        case RECEIVE_PRODUCT:
            newState[action.product.id] = action.product
            return newState
        default:
            return state
    }
}

export default ProductsReducer