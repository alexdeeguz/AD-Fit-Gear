import React from 'react'
import CartItem from './cart_item'
import { updateCart } from '../actions/cart_item_actions'

class CartItems extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getCartItems()
            // .then(() => this.props.getProducts())
        
        if (this.props.currentUser) {
            this.props.getCart(this.props.currentUser.id)
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
            total += (Number(item.product.price) * item.quantity)
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
                        // Object.values(this.props.products).map(prod => {
                        //     let cartItem = this.getExtraProps(prod.id)
                        //     return < CartItem cartItem={cartItem} product={prod} getProduct={this.props.getProduct} key={prod.id} />
                        // })
                        this.props.items.map(item => {
                            // let cartItem = this.getExtraProps(item.id)
                            return < CartItem key={item.id} item={item} 
                                            // products={this.props.products} 
                                            // product={this.props.products[item.product_id]} 
                                            product={this.props.product}
                                            removeItem={this.props.removeItem}
                                            updateCart={this.props.updateCart}
                                            getCartItem={this.props.getCartItem} 
                                            getProduct={this.props.getProduct}/>
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