import { connect } from 'react-redux'
import ProductShow from '../product_show'
import { getProduct } from '../../actions/product_actions'
import { getCategory } from '../../actions/category_actions'
import { addToCart } from '../../actions/cart_item_actions'

const mSTP = (state, ownProps) => ({
    product: state.entities.products[ownProps.match.params.productId],
    cart: Object.values(state.entities.cart)[0],
    categories: Object.values(state.entities.categories),
    currentUser: state.entities.users[state.session.id],
    reviews: Object.values(state.entities.reviews)
})

const mDTP = dispatch => ({
    getProduct: (categoryId, productId) => dispatch(getProduct(categoryId, productId)),
    getCategory: id => dispatch(getCategory(id)),
    addToCart: (productId, cartId, size, quantity) => dispatch(addToCart(productId, cartId, size, quantity))
})



export default connect(mSTP, mDTP)(ProductShow)