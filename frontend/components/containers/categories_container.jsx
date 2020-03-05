import { connect } from 'react-redux'
import CategoryIndex from '../category_index'
import { getCategories } from '../../actions/category_actions'

const mSTP = (state, ownProps) => ({
    categories: Object.values(state.entities.categories)
})

const mDTP = dispatch => ({
    getCategories: () => dispatch(getCategories())
})



export default connect(mSTP, mDTP)(CategoryIndex)