import React from 'react'

class CartItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            quantity: this.props.item.quantity
        }
        this.removeItem = this.removeItem.bind(this)
    }

    removeItem(e) {
        e.stopPropagation()
        this.props.removeItem(this.props.item.id)
    }

    nothing() {
        return null
    }

    render() {
            const size = this.props.item.size
            const name = this.props.item.product === undefined ? null : this.props.item.product.name.toUpperCase() 
            const price = this.props.item.product === undefined ? null : this.props.item.product.price
            return (
                <div className="cart-item">
                    <div className="cart-product-image"></div>
                    <div className="product-details">
                        <b><p id="name">{name}</p></b>
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
                            <h6 onClick={this.removeItem}>REMOVE</h6>
                        </div>

                    </div>
                </div>
            )
    }
}

export default CartItem