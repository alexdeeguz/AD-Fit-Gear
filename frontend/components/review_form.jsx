import React from 'react'

class ReviewForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            form: "star-rating",
            rating: "",
            body: ""
        }
        
        this.updateRating = this.updateRating.bind(this)
        this.updateReviewDescription = this.updateReviewDescription.bind(this)
        this.updateBody = this.updateBody.bind(this)
    }

    updateReviewDescription(e) {
        e.stopPropagation()
    }

    updateRating(e) {
        this.setState({
            rating: Number(e.currentTarget.id),
            form: "review-description"
        })
        e.stopPropagation()
    }

    updateBody(e) {
        this.setState({
            body: e.target.value
        })
    }

    render() {
        if (this.state.form === "star-rating") {
        return (
            <div className="review-form">
                <h3>HOW WOULD YOU RATE THIS ITEM?</h3>
                <div onClick={this.updateRating} id="5" className={this.state.rating === 5 ? "star-rating-container selected" : "star-rating-container"}>
                    <div className="star-rating">
                        <p>Love it!</p>
                        <h3>★★★★★</h3>
                    </div>
                </div>

                <div onClick={this.updateRating} id="4" className={this.state.rating === 4 ? "star-rating-container selected" : "star-rating-container"}>
                    <div className="star-rating">
                        <p>Like it</p>
                        <h3>★★★★☆</h3>
                    </div>
                </div>

                <div onClick={this.updateRating} id="3" className={this.state.rating === 3 ? "star-rating-container selected" : "star-rating-container"}>
                    <div className="star-rating">
                        <p>It's okay</p>
                        <h3>★★★☆☆</h3>
                    </div>
                </div>

                <div onClick={this.updateRating} id="2" className={this.state.rating === 2 ? "star-rating-container selected" : "star-rating-container"}>
                    <div className="star-rating">
                        <p>Didn't like it</p>
                        <h3>★★☆☆☆</h3>
                    </div>
                </div>

                <div onClick={this.updateRating} id="1" className={this.state.rating === 1 ? "star-rating-container selected" : "star-rating-container"}>
                    <div className="star-rating">
                        <p>Hate it</p>
                        <h3>★☆☆☆☆</h3>
                    </div>
                </div>
            </div>
        ) 
        } else if (this.state.form === "review-description") {
            return (
            <div className="review-form">
                <h2>TELL US MORE!</h2>
                <textarea placeholder="Share your experience" value={this.state.body} onChange={this.updateBody}></textarea>
                <p id="terms-agreement">By submitting, I acknowledge the Privacy Policy and that my review will be publicly posted and shared online</p>
                <p id="next-button">Done</p>
                <p id="back-button" onClick={() => this.setState({form: "star-rating"})}>Back</p>
            </div>
            )
        } 
    }
}

export default ReviewForm