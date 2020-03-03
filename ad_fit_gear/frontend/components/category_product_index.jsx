import React from 'react'
import CategoryProductIndexItem from './category_product_index_item'
import FiltersComponent from '../components/filters'

class CategoryProductIndex extends React.Component {
    constructor(props) {
        super(props)
        console.log(props)
    }

    componentDidMount() {
        const categoryId = this.props.match.params.categoryId
        this.props.getCategory(categoryId)
        this.props.getProducts(categoryId)
    }

    componentDidUpdate(prevProps) {
        // const categoryId = this.props.match.params.categoryId
        if (prevProps.match.params.categoryId != this.props.match.params.categoryId) {
            this.props.getProducts(this.props.match.params.categoryId)
        }
    }

    render() {
        const { products } = this.props

        return (
            <div className="products">
                <FiltersComponent {...this.props} />
                <div className="product-index-div">
                    {
                    products.map(product => (
                        <CategoryProductIndexItem {...this.props} product={product} key={product.id} />
                    ))
                    }
                </div>
            </div>
        )
    }
}

export default CategoryProductIndex