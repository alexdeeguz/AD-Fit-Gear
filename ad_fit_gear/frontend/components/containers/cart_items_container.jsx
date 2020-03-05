import { connect } from 'react-redux'
import CartItems from '../cart_items'
import { getCartItems, deleteCartItem, addToCart } from '../../actions/cart_item_actions'
import { getCart } from '../../actions/cart_actions'
import { getProduct } from '../../actions/product_actions'
const mSTP = (state, ownProps) => ({
    items: Object.values(state.entities.cartItems),
    user: Object.values(state.entities.users)[0],
    products: state.entities.products
})

const mDTP = dispatch => ({
    getCartItems: () => dispatch(getCartItems()),
    getProduct: (categoryId, productId) => dispatch(getProduct(categoryId, productId)),
    removeItem: id => dispatch(deleteCartItem(id)),
    getCart: user_id => dispatch(getCart(user_id))
})

export default connect(mSTP, mDTP)(CartItems)