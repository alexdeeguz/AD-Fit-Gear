import { connect } from 'react-redux'
import CategoryProductIndex from '../category_product_index'
import { getProducts, getProduct } from '../../actions/product_actions'
import { getCategory } from '../../actions/category_actions' 

const mSTP = (state, ownProps) => ({
    products: Object.values(state.entities.products)
})

const mDTP = dispatch => ({
    getProducts: (categoryId) => dispatch(getProducts(categoryId)),
    getCategory: id => dispatch(getCategory(id)),
    getProduct: (categoryId, productId) => dispatch(getProduct(categoryId, productId))
})



export default connect(mSTP, mDTP)(CategoryProductIndex)