import React from 'react'
import ReviewIndexItem from './review_index_item'

class ReviewIndex extends React.Component {
    constructor(props) {
        super(props)
        console.log(props)
    }


    componentDidMount() {
        const categoryId = this.props.match.params.categoryId
        const productId = this.props.match.params.productId
        this.props.getReviews(categoryId, productId)
    }

    render() {
        
        return (
            <div className="review-index-container">
                {
                    this.props.reviews.map(review => (
                        <ReviewIndexItem review={review} key={review.id} />
                    ))
                }
            </div>
        )
    }
}

export default ReviewIndex