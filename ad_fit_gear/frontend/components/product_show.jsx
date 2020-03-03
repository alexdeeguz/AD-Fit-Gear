import React from 'react'

class ProductShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            quantity: 1,
            size: "",
            selected: ""
        }
        this.incrementQuantity = this.incrementQuantity.bind(this)
        this.decrementQuantity = this.decrementQuantity.bind(this)
        this.hasSize = this.hasSize.bind(this)
        this.updateSize = this.updateSize.bind(this)
    }

    hasSize() {
        const categoryId = this.props.match.params.categoryId
        if (categoryId === "6" || categoryId === "5") { return false }
        return true
    }

    componentDidMount() {
        const categoryId = this.props.match.params.categoryId
        const productId = this.props.match.params.productId
        this.props.getProduct(categoryId, productId)
        this.props.getCategory(categoryId)
    }

    incrementQuantity() {
        const num = this.state.quantity + 1
        this.setState({
            quantity: num
        })
    }

    decrementQuantity() {
        const num = this.state.quantity - 1
        if (num < 0) {
            this.setState({
                quantity: 0
            })
        }
        else{
            this.setState({
                quantity: num
            })

        }
    }

    updateSize(e) {
        this.setState({
            size: e.target.innerHTML,
            selected: e.target.innerHTML
        })
    }
    nothing() {
    }
    
    render() {
        const { product } = this.props 
        const disable = this.state.quantity === 0 ? true : false;
        if (this.props.product){

            return (
            <div className="product-show-container">
                <div className="product-image"></div>
                <form className="product-form">
                    <h3>{product.name.toUpperCase()}</h3>
                    <h4>${product.price}</h4>
                    {this.hasSize() ? 
                    <div className="sizes-container">
                        <p>Size:</p>
                        <div className="sizes"> 
                            <li  className={this.state.selected === "XS" ? "selected" : "non-selected"} onClick={this.updateSize}>XS</li>
                            <li  className={this.state.selected === "S" ? "selected" : "non-selected"}onClick={this.updateSize}>S</li>
                            <li  className={this.state.selected === "M" ? "selected" : "non-selected"}onClick={this.updateSize}>M</li>
                            <li  className={this.state.selected === "L" ? "selected" : "non-selected"}onClick={this.updateSize}>L</li>
                            <li  className={this.state.selected === "XL" ? "selected" : "non-selected"}onClick={this.updateSize}>XL</li>
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
            )
        }
        else
            return null; 
    }
}

export default ProductShow