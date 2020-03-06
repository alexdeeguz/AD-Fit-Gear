import { connect } from 'react-redux'
import CartItems from '../cart_items'
import { getCartItems, deleteCartItem, updateCart, getCartItem } from '../../actions/cart_item_actions'
import { getCart } from '../../actions/cart_actions'
import { getProduct, getProducts } from '../../actions/product_actions'
const mSTP = (state, ownProps) => ({
    items: Object.values(state.entities.cartItems),
    user: Object.values(state.entities.users)[0],
    products: state.entities.products,
    currentUser: state.entities.users[state.session.id]
})

const mDTP = dispatch => ({
    getCartItems: () => dispatch(getCartItems()),
    getCartItem: id => dispatch(getCartItem(id)),
    getProduct: (categoryId, productId) => dispatch(getProduct(categoryId, productId)),
    getProducts: (categoryId) => dispatch(getProducts(categoryId)),
    removeItem: id => dispatch(deleteCartItem(id)),
    getCart: user_id => dispatch(getCart(user_id)),
    updateCart: (id, productId, cartId, size, quantity) => dispatch(updateCart(id, productId, cartId, size, quantity))
})

export default connect(mSTP, mDTP)(CartItems)