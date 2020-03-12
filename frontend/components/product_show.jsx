import React from 'react'
import ReviewForm from './review_form'
import ReviewIndexContainer from './containers/review_index_container'
import HeaderContainer from './containers/header_container'
import Footer from './footer'
import Images from './images'

class ProductShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            product_id: Number(this.props.match.params.productId),
            cart_id: "",
            size: "",
            quantity: 1
        }
        this.incrementQuantity = this.incrementQuantity.bind(this)
        this.decrementQuantity = this.decrementQuantity.bind(this)
        this.hasSize = this.hasSize.bind(this)
        this.updateSize = this.updateSize.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.openModal = this.openModal.bind(this)
        this.closeModal = this.closeModal.bind(this)
    }

    hasSize() {
        
        const categoryId = this.props.match.params.categoryId
        if (this.props.categories[4] || this.props.categories[5]) {
            if (categoryId == this.props.categories[4].id || categoryId == this.props.categories[5].id) { return false }
        }
        return true
    }

    componentDidMount() {
        const header = $(".header-main")
        header.addClass("white-header")
        const categoryId = this.props.match.params.categoryId
        const productId = this.props.match.params.productId
        this.props.getProduct(categoryId, productId)
        this.setState({
            cart_id: this.props.cartId
        })
        window.scrollTo(0, 0)
    }

    componentDidUpdate(prevProps) {
        const categoryId = this.props.match.params.categoryId
        const productId = this.props.match.params.productId
        if (this.props.match.url !== prevProps.match.url) {
            this.props.getProduct(categoryId, productId)
        }
    }

    incrementQuantity() {
        const num = this.state.quantity + 1
        this.setState({
            quantity: num
        })
    }

    decrementQuantity() {
        const num = this.state.quantity - 1
        if (num < 1) {
            this.setState({
                quantity: 1
            })
        }
        else{
            this.setState({
                quantity: num
            })
        }
    }

    updateSize(e) {
        e.preventDefault()
        this.setState({
            size: e.target.innerHTML
        })
    }
    nothing() {
    }

    isInCart() {
        for (let i = 0; i < this.props.cartItems.length; i++) {
            const item = this.props.cartItems[i]
            if (this.state.product_id === item.product_id) {
                return true
            }
        } 
        return false
    }

    sameSize() {
        for (let i = 0; i < this.props.cartItems.length; i++) {
            const item = this.props.cartItems[i]
            if (this.state.size === item.size) {
                return true
            }
        }
        return false
    }

    handleSubmit(e) {
        e.preventDefault()
        if (this.isInCart() && this.sameSize()) {
            alert("Item already in cart")
            return
        }
        if (this.hasSize() && this.state.size === "") {
            alert("Please enter a size")
            return
        }
        const cartId = this.props.currentUser ? Number(this.props.currentUser.id) : ""
        this.setState({
            cart_id: cartId
        })
        const productId = this.state.product_id
        const size = this.state.size
        const quantity = this.state.quantity
        const modal = $(".modal-container")
        if (this.props.currentUser) {
        this.props.addToCart(productId, cartId, size, quantity)
        .then(() => modal.removeClass("hidden"))
        .then(() => modal.addClass("show"))
        } else {
            alert("Please log in to add items to cart")
            this.props.history.push("/login")
        }
    }

    openModal(e) {
        e.preventDefault()
        if (this.props.currentUser) {
            const modal = $(".review-modal-container")
            modal.removeClass("hidden")
            modal.addClass("show")
        } else {
            alert("Please log in to write a review")
            this.props.history.push("/login")
        }
    }

    closeModal(e) {
        e.preventDefault()
        const modal = $(".review-modal-container")
        modal.removeClass("show")
        modal.addClass("hidden")
    }
    
    render() {
        const { product } = this.props 
        if (this.props.product){
            return (
                <div>
                    <HeaderContainer {...this.props}/>
                    <div className="main">
                        <div className="placement"></div>
                        <div className="main-product-show-container">
                            <div className="product-show-container">
                                {/* <div className="product-image"></div> */}
                                <div className="product-image-show-container">
                                    {/* <img className="product-image" src={this.props.product.photoUrl}/> */}
                                    <Images {...this.props}/>
                                </div>
                                <div className="product-form">
                                    <form onSubmit={this.handleSubmit}>
                                        <h3>{product.name.toUpperCase()}</h3>
                                        {this.props.reviews.length === 0 ? <p id="product-stars">☆☆☆☆☆({this.props.reviews.length})</p> : <p id="product-stars">★★★★★({this.props.reviews.length})</p>}
                                        <h4>${product.price}</h4>
                                        {this.hasSize() ? 
                                        <div className="sizes-container">
                                            <p>Size:</p>
                                            <div className="sizes"> 
                                                <li  className={this.state.size === "XS" ? "selected" : "non-selected"} onClick={this.updateSize}>XS</li>
                                                <li  className={this.state.size === "S" ? "selected" : "non-selected"}onClick={this.updateSize}>S</li>
                                                <li  className={this.state.size === "M" ? "selected" : "non-selected"}onClick={this.updateSize}>M</li>
                                                <li  className={this.state.size === "L" ? "selected" : "non-selected"}onClick={this.updateSize}>L</li>
                                                <li  className={this.state.size === "XL" ? "selected" : "non-selected"}onClick={this.updateSize}>XL</li>
                                            </div> 
                                        </div>: ""}
                                    
                                        <div className="quantity-container">
                                            <p>Quantity:</p>
                                            <div className="increment-container">
                                                <div id="minus" className="increment"  onClick={this.decrementQuantity}>-</div>
                                                <input type="number" min="1" onChange={this.nothing} value={this.state.quantity}/>
                                                <div id="plus" className="increment" onClick={this.incrementQuantity}>+</div>
                                            </div>
                                        </div>
                                        <button type="submit" id="add-to-cart-button">ADD TO CART</button>
                                        <li id="product-description">{product.description}</li>
                                    </form>
                                </div>

                            </div>

                            <div className="review-button-container">
                                {this.props.reviews.length === 0 ? <h3>☆☆☆☆☆ 0 Reviews</h3> : <h3>★★★★★ {this.props.reviews.length} Reviews</h3>}
                                <p onClick={this.openModal} id="write-review-button">Write a review</p>
                            </div>

                            <div className="review-modal-container hidden" onClick={this.closeModal}>
                                <div className="review-modal">
                                </div>
                                <div className="review-modal-content" onClick={(e) => e.stopPropagation()}>
                                    <span onClick={this.closeModal} className="close">&times;</span>
                                    <ReviewForm postReview={this.props.postReview} currentUser={this.props.currentUser} match={this.props.match} closeModal={this.closeModal}/>
                                </div>
                            </div>
                        </div> 
                    </div>
                        <ReviewIndexContainer match={this.props.match} currentUser={this.props.currentUser}/>
                        <Footer />
                </div>
            )
        }
        else
            return null; 
    }
}

export default ProductShow