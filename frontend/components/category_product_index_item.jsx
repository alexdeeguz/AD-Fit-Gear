import React from 'react'

class CategoryProductIndexItem extends React.Component {
    constructor(props) {
        super(props)
        this.redirect_to_item = this.redirect_to_item.bind(this)
    }

    redirect_to_item() {
        const categoryId = this.props.match.params.categoryId
        const productId = this.props.product.id
        this.props.getProduct(categoryId, productId)
        this.props.history.push(`/categories/${categoryId}/products/${productId}`)
    }

    render() {
        const { product } = this.props
        const { name, price, description } = product
        return (
            <div id="product-item" className="product-div">
                <div id="img" onClick={this.redirect_to_item}>
                    
                </div>
                <div className="listing-description">
                    <p>{name.toUpperCase()}</p>
                    <p>${price}</p>
                </div>
            </div>
        )
    }
}

export default CategoryProductIndexItem