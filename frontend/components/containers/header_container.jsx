import { connect } from 'react-redux'
import Header from '../header'
import { getCategories } from '../../actions/category_actions'

const mSTP = (state, ownProps) => ({
    categories: Object.values(state.entities.categories),
    currentUser: state.entities.users[state.session.id]
})

const mDTP = dispatch => ({
    getCategories: () => dispatch(getCategories())
})



export default connect(mSTP, mDTP)(Header)