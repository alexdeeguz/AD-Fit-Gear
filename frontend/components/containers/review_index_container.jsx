import { connect } from 'react-redux'
import ReviewIndex from '../review_index'
import { getAllReviews, postReview } from '../../actions/review_actions'

const mSTP = (state, ownProps) => ({
    reviews: Object.values(state.entities.reviews)
})

const mDTP = dispatch => ({
    getReviews: (categoryId, productId) => dispatch(getAllReviews(categoryId, productId))
})



export default connect(mSTP, mDTP)(ReviewIndex)