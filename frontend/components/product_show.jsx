import React from 'react'
import ReviewForm from './review_form'
import ReviewIndex from './review_index'

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
        const categoryId = this.props.match.params.categoryId
        const productId = this.props.match.params.productId
        this.props.getProduct(categoryId, productId)
        this.setState({
            cart_id: this.props.cartId
        })
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

    handleSubmit() {
        const cartId = this.props.currentUser ? Number(this.props.currentUser.id) : ""
        this.setState({
            cart_id: cartId
        })
        const productId = this.state.product_id
        const size = this.state.size
        const quantity = this.state.quantity
        const modal = $(".modal-container")
        this.props.addToCart(productId, cartId, size, quantity)
        .then(() => modal.removeClass("hidden"))
        .then(() => modal.addClass("show"))
    }

    openModal(e) {
        e.preventDefault()
        const modal = $(".review-modal-container")
        modal.removeClass("hidden")
        modal.addClass("show")
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
                <div className="main">
                    <div className="main-product-show-container">
                        <div className="product-show-container">
                            <div className="product-image"></div>
                            <div className="product-form">
                                <form onSubmit={this.handleSubmit}>
                                    <h3>{product.name.toUpperCase()}</h3>
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
                                </form>
                            </div>

                        </div>

                        <div className="review-button-container">
                            <h3>☆☆☆☆☆</h3>
                            <p onClick={this.openModal} id="write-review-button">Write a review</p>
                        </div>

                        <div className="review-modal-container hidden" onClick={this.closeModal}>
                            <div className="review-modal">
                            </div>
                            <div className="review-modal-content" onClick={(e) => e.stopPropagation()}>
                                <span onClick={this.closeModal} className="close">&times;</span>
                                <ReviewForm />
                            </div>
                        </div>
                    </div>
                    
                    <ReviewIndex />
                </div>
            )
        }
        else
            return null; 
    }
}

export default ProductShow