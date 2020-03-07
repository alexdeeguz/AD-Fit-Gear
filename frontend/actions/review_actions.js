import * as ReviewAPIUtil from '../utils/review_utils'

export const RECEIVE_ALL_REVIEWS = "RECEIVE_ALL_REVIEWS"
export const RECEIVE_REVIEW = "RECEIVE_REVIEW"

const receiveAllReviews = reviews => ({
    type: RECEIVE_ALL_REVIEWS,
    reviews
})

const receiveReview = review => ({
    type: RECEIVE_REVIEW,
    review
})

export const getAllReviews = (categoryId, productId) => dispatch => 
    ReviewAPIUtil.getAllReviews(categoryId, productId)
    .then(reviews => dispatch(receiveAllReviews(reviews)))

export const postReview = (categoryId, productId, review) => dispatch => 
    ReviewAPIUtil.postReview(categoryId, productId, review)
    .then(createdReview => dispatch(receiveReview(createdReview)))