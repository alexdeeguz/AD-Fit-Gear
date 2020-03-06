import React from 'react'
import CartItem from './cart_item'
import { updateCart } from '../actions/cart_item_actions'

class CartItems extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getCartItems()
        this.props.getProducts()
        if (this.props.user) {
            this.props.getCart(this.props.user.id)
        }
    }

    // getExtraProps(productId) {
    //     let items = this.props.items
    //     for (let i = 0; i < items.length; i++) {
    //         if (items[i].product_id === productId) {
    //             return items[i]
    //         }
    //     }
    // }

    componentDidUpdate(prevProps) {
        if (this.props.items) {
            if (prevProps.items.length !== this.props.items.length) {
                this.props.getCartItems()
            }
        }
    }

    render() {
        if (this.props.currentUser) {
        return (
            <div>
                <div className="cart-items-container">
                    {
                        // Object.values(this.props.products).map(prod => {
                        //     let cartItem = this.getExtraProps(prod.id)
                        //     return < CartItem cartItem={cartItem} product={prod} getProduct={this.props.getProduct} key={prod.id} />
                        // })
                        this.props.items.map(item => {
                            // let cartItem = this.getExtraProps(item.id)
                            return < CartItem key={item.id} item={item} 
                                            products={this.props.products} 
                                            product={this.props.products[item.product_id]} 
                                            removeItem={this.props.removeItem}
                                            updateCart={this.props.updateCart}
                                            getCartItem={this.props.getCartItem} />
                        })
                    }
                </div>
                <div className="checkout-container">
                    <button id="checkout-button">CHECKOUT</button>
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