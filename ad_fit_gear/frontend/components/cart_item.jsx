import React from 'react'

class CartItem extends React.Component {
    constructor(props) {
        super(props)
        console.log(props)
    }

    componentDidMount() {
        // console.log("CDM")
        const categoryId = this.props.item.category_id
        const productId = this.props.item.product_id
        this.props.getProduct(categoryId, productId)
    }

    // componentDidUpdate(prevProps) {
    //     // debugger
    //     if (prevProps.products.length !== this.props.products.length) {
    //         this.props.getProduct(this.props.item.category_id, this.props.item.product_id)
    //     }
    // }


    render() {
        // console.log(this.props)
        // if (Object.values(this.props.products).length === 0) {
            // return null
        // } else {
            // debugger
            // let product = Object.values(this.props.products).pop()
            // console.log(product.name)
            const name = this.props.products[this.props.item.product_id] ? this.props.products[this.props.item.product_id].name : null;
            return (
                <div className="cart-item">
                    <p>111</p>
                    {this.props.item.id}
                    { name}
                    {/* <p>{this.props.cartItem.quantity}</p> */}
                    {/* {this.props.item.name} */}
                    
                </div>
            )
    }
}

export default CartItem