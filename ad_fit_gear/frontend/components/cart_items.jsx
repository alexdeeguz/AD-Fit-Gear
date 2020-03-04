import React from 'react'
import CartItem from './cart_item'

class CartItems extends React.Component {
    constructor(props) {
        super(props)
        console.log(props)
    }

    componentDidMount() {
        this.props.getCartItems()
            // .then(res => {
            //     this.props.items.forEach(item => {
            //         const categoryId = item.category_id
            //         const productId = item.product_id
            //         this.props.getProduct(categoryId, productId)
            //     })
            // })
        
    }

    // getExtraProps(productId) {
    //     let items = this.props.items
    //     for (let i = 0; i < items.length; i++) {
    //         if (items[i].product_id === productId) {
    //             return items[i]
    //         }
    //     }
    // }

    render() {
        return (
            <div className="cart-items-container">
                {
                    // Object.values(this.props.products).map(prod => {
                    //     let cartItem = this.getExtraProps(prod.id)
                    //     return < CartItem cartItem={cartItem} product={prod} getProduct={this.props.getProduct} key={prod.id} />
                    // })
                    this.props.items.map(item => {
                        // let cartItem = this.getExtraProps(item.id)
                        return < CartItem item={item} key={item.id} products={this.props.products} getProduct={this.props.getProduct.bind(this)}/>
                    })
                }
            </div>
        )
    }
}

export default CartItems