import { RECEIVE_ALL_REVIEWS, RECEIVE_REVIEW } from '../actions/review_actions'


const ReviewsReducer = (state = {}, action) => {
    Object.freeze(state)
    const newState = Object.assign({}, state)

    switch (action.type) {
        case RECEIVE_ALL_REVIEWS:
            return action.reviews
        case RECEIVE_REVIEW:
            newState[action.review.id] = action.review
            return newState
        default:
            return state
    }
}

export default ReviewsReducer