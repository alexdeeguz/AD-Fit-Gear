import React from 'react'
import ProductItem from './product_item'

class ProductShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const categoryId = this.props.match.params.categoryId
        const productId = this.props.match.params.productId
        this.props.getProduct(categoryId, productId)
        this.props.getCategory(categoryId)
    }

    render() {
        return (
            <div>
            {
                this.props.product.map(item => (
                    <ProductItem {...this.props} item={item} key={item.id} />
                ))
            }
            </div>
        )
    }
}

export default ProductShow