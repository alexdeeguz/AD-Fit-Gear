import React from 'react'

class ReviewIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let rating = ""
        if (this.props.review.rating === 5) {rating = "★★★★★"} 
        else if (this.props.review.rating === 4) { rating = "★★★★"}
        else if (this.props.review.rating === 3) { rating = "★★★"}
        else if (this.props.review.rating === 2) { rating = "★★"}
        else if (this.props.review.rating === 1) { rating = "★"}
        if (this.props.review.user) {
            return (
                <div className="review-item-container">
                    <h3>{this.props.review.user.username}</h3>
                    <p id="review-date">{this.props.review.date}</p>
                    <p id="review-rating">{rating}</p>
                    <p>{this.props.review.body}</p>
                </div>
            )
        } else {
            return null
        }
    }
}

export default ReviewIndexItem