import { connect } from 'react-redux'
import CartItems from '../cart_items'
import { getCartItems } from '../../actions/cart_item_actions'
import { getProduct } from '../../actions/product_actions'
const mSTP = (state, ownProps) => ({
    items: Object.values(state.entities.cartItems),
    products: state.entities.products
})

const mDTP = dispatch => ({
    getCartItems: () => dispatch(getCartItems()),
    getProduct: (categoryId, productId) => dispatch(getProduct(categoryId, productId))
})

export default connect(mSTP, mDTP)(CartItems)