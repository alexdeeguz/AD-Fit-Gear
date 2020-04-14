import React from 'react'
import CartItem from './cart_item'

class CartItems extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getCartItems()
        
        if (this.props.currentUser) {
            this.props.getCart(this.props.currentUser.id)
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.currentUser !== prevProps.currentUser) {
            if (this.props.currentUser) {
                this.props.getCart(this.props.currentUser.id)
            }
            this.props.getCartItems()
        } 

        if (this.props.items) {
            if (prevProps.items.length !== this.props.items.length) {
                this.props.getCartItems()
            }
        }
    }

    total() {
        let total = 0
        
        Object.values(this.props.items).forEach(item => {
            let product_price = item.product ? item.product.price : 0
            total += (Number(product_price) * item.quantity)
        })
        return total.toFixed(2)
    }

    render() {
        const total = this.total() 
        if (this.props.currentUser) {
            if (this.props.items === undefined) {
                return <h1>FIRST RENDER THIS IS NULL OIASDJFIOASDJO</h1>
            }
        return (
            <div>
                <div className="cart-items-container">
                    {
                        this.props.items.map(item => {

                            return < CartItem key={item.id} item={item} 
                                            product={this.props.product}
                                            removeItem={this.props.removeItem}
                                            updateCart={this.props.updateCart}
                                            getCartItem={this.props.getCartItem} 
                                            getProduct={this.props.getProduct}
                                            getCartItems={this.props.getCartItems}
                                            history={this.props.history} />
                        })
                    }
                </div>
                <div className="checkout-container">
                <button id="checkout-button">CHECKOUT * ${total}</button>
                </div>
            </div>
        )
        }

        return (
            <h3>LOG IN TO ADD ITEMS TO CART</h3>
        )
    }
}

export default CartItems