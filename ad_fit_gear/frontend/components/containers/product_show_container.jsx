import { connect } from 'react-redux'
import ProductShow from '../product_show'
import { getProduct } from '../../actions/product_actions'
import { getCategory } from '../../actions/category_actions'

const mSTP = (state, ownProps) => ({
    product: Object.values(state.entities.products)
})

const mDTP = dispatch => ({
    getProduct: (categoryId, productId) => dispatch(getProduct(categoryId, productId)),
    getCategory: id => dispatch(getCategory(id))
})



export default connect(mSTP, mDTP)(ProductShow)