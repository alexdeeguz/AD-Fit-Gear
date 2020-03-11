import React from 'react'

class CartItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            quantity: this.props.item.quantity
        }
        this.removeItem = this.removeItem.bind(this)
        this.decrementQuantity = this.decrementQuantity.bind(this)
        this.incrementQuantity = this.incrementQuantity.bind(this)
        this.redirect_to_product = this.redirect_to_product.bind(this)
    }

    redirect_to_product() {
        this.props.history.push(`/categories/${this.props.item.product.category_id}/products/${this.props.item.product_id}`)
        const modal = $(".modal-container")
        modal.removeClass("show")
        modal.addClass("hidden")
    }

    removeItem(e) {
        e.stopPropagation()
        this.props.removeItem(this.props.item.id)
    }

    nothing() {
        return null
    }

    incrementQuantity(e) {
        e.stopPropagation()
        const id = this.props.item.id
        const productId = this.props.item.product_id
        const cartId = this.props.item.cart_id
        const size = this.props.item.size
        const quantity = this.props.item.quantity + 1
        this.props.updateCart(id, productId, cartId, size, quantity)
        this.setState({
            quantity: quantity
        })
    }
    decrementQuantity(e) {
        e.stopPropagation()
        const id = this.props.item.id
        const productId = this.props.item.product_id
        const cartId = this.props.item.cart_id
        const size = this.props.item.size
        const quantity = this.props.item.quantity - 1
        if (quantity < 1) { quantity = 1 }
        this.props.updateCart(id, productId, cartId, size, quantity)
        this.setState({
            quantity: quantity
        })
    }

    componentDidUpdate(prevProps) {
        if (this.props.item) {
            if (prevProps.item.quantity !== this.props.item.quantity) {
                this.props.getCartItem(this.props.item.id)
            }
        } else {
            this.props.getCartItem(this.props.item.id)
        }
    }

    helper() {
        
        this.props.products.forEach(prod => {
            if (this.props.item.product_id === prod.id) {
                this.props.product = prod
            }
        })
    }

    

    render() {
            const size = this.props.item.size
            const name = this.props.item.product === undefined ? null : this.props.item.product.name.toUpperCase() 
            const price = this.props.item.product === undefined ? null : this.props.item.product.price
            return (
                <div className="cart-item">
                    <div className="cart-product-image">
                        {this.props.item.photoUrls ? <img onClick={this.redirect_to_product} src={this.props.item.photoUrls[0]} className="imagee"/> : ""}
                    </div>
                    <div className="product-details">
                        <b><p id="name" onClick={this.redirect_to_product}>{name}</p></b>
                        {size === "XS" ? <p>EXTRA SMALL</p> : ""}
                        {size === "S" ? <p>SMALL</p> : ""}
                        {size === "M" ? <p>MEDIUM</p> : ""}
                        {size === "L" ? <p>LARGE</p> : ""}
                        {size === "XL" ? <p>EXTRA LARGE</p> : ""}
                        <p id="price">${price}</p>

                        <div className="update-cart-container">
                            <div className="cart-increment-container">
                                <div id="cart-minus" className="cart-increment" onClick={this.decrementQuantity}>-</div>
                                <input id="cart-input" type="number" min="1" onChange={this.nothing} value={this.state.quantity} />
                                <div id="cart-plus" className="cart-increment" onClick={this.incrementQuantity}>+</div>
                            </div>
                            <p id="remove" onClick={this.removeItem}>REMOVE</p>
                        </div>

                    </div>
                </div>
            )
    }
}

export default CartItem