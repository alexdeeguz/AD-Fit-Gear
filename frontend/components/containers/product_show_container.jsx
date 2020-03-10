import { connect } from 'react-redux'
import ProductShow from '../product_show'
import { getProduct } from '../../actions/product_actions'
import { getCategory } from '../../actions/category_actions'
import { addToCart, updateCart } from '../../actions/cart_item_actions'
import { postReview } from '../../actions/review_actions'

const mSTP = (state, ownProps) => ({
    product: state.entities.products[ownProps.match.params.productId],
    cart: Object.values(state.entities.cart)[0],
    categories: Object.values(state.entities.categories),
    currentUser: state.entities.users[state.session.id],
    reviews: Object.values(state.entities.reviews),
    cartItems: Object.values(state.entities.cartItems)
})

const mDTP = dispatch => ({
    getProduct: (categoryId, productId) => dispatch(getProduct(categoryId, productId)),
    getCategory: id => dispatch(getCategory(id)),
    addToCart: (productId, cartId, size, quantity) => dispatch(addToCart(productId, cartId, size, quantity)),
    postReview: (categoryId, productId, review) => dispatch(postReview(categoryId, productId, review)),
    updateCart: (id, productId, cartId, size, quantity) => dispatch(updateCart(id, productId, cartId, size, quantity))
})



export default connect(mSTP, mDTP)(ProductShow)