import React from 'react'
import CartItem from './cart_item'

class CartItems extends React.Component {
    constructor(props) {
        super(props)
        // console.log(props)
    }

    componentDidMount() {
        this.props.getCartItems()
        this.props.getCart(this.props.user.id)
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
        if (prevProps.items.length !== this.props.items.length) {
            this.props.getCartItems()
        }
    }

    render() {
        debugger
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
                            return < CartItem item={item} key={item.id} products={this.props.products} product={this.props.products[item.product_id]} removeItem={this.props.removeItem} />
                        })
                    }
                </div>
                <div className="checkout-container">
                    <button id="checkout-button">CHECKOUT</button>
                </div>
            </div>
        )
    }
}

export default CartItems