import React from 'react'

class ReviewForm extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="review-form">
                <h3>HOW WOULD YOU RATE THIS ITEM?</h3>
                <div className="star-rating-container">
                    <div className="star-rating">
                        <p>Love it!</p>
                        <h3>★★★★★</h3>
                    </div>
                </div>

                <div className="star-rating-container">
                    <div className="star-rating">
                        <p>Like it</p>
                        <h3>★★★★☆</h3>
                    </div>
                </div>

                <div className="star-rating-container">
                    <div className="star-rating">
                        <p>It's okay</p>
                        <h3>★★★☆☆</h3>
                    </div>
                </div>

                <div className="star-rating-container">
                    <div className="star-rating">
                        <p>Didn't like it</p>
                        <h3>★★☆☆☆</h3>
                    </div>
                </div>

                <div className="star-rating-container">
                    <div className="star-rating">
                        <p>Hate it</p>
                        <h3>★☆☆☆☆</h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default ReviewForm