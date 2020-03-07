import React from 'react'
import ReviewIndexItem from './review_index_item'

class ReviewIndex extends React.Component {
    constructor(props) {
        super(props)
    }


    componentDidMount() {
        const categoryId = this.props.match.params.categoryId
        const productId = this.props.match.params.productId
        this.props.getReviews(categoryId, productId)
    }

    componentDidUpdate(prevProps) {
        const categoryId = this.props.match.params.categoryId
        const productId = this.props.match.params.productId
        if (prevProps.reviews.length !== this.props.reviews.length) {
            this.props.getReviews(categoryId, productId)
        }
    }


    render() {
        
        return (
            <div className="review-index-container">
                {
                    this.props.reviews.map(review => (
                        <ReviewIndexItem review={review} key={review.id} currentUser={this.props.currentUser}/>
                    ))
                }
            </div>
        )
    }
}

export default ReviewIndex