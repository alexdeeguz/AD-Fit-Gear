import { connect } from 'react-redux'
import Search from '../search'
import { getSearchResults } from '../../actions/search_actions'
import { getProduct } from '../../actions/product_actions'

const mSTP = (state, ownProps) => ({
    searches: Object.values(state.entities.products)
})

const mDTP = dispatch => ({
    getSearchResults: search => dispatch(getSearchResults(search)),
    getProduct: (categoryId, productId) => dispatch(getProduct(categoryId, productId))
})

export default connect(mSTP, mDTP)(Search)