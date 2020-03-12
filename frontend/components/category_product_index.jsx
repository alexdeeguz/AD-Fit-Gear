import React from 'react'
import CategoryProductIndexItem from './category_product_index_item'
import FiltersComponent from '../components/filters'
import HeaderContainer from './containers/header_container'
import Footer from './footer'

class CategoryProductIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const categoryId = this.props.match.params.categoryId
        this.props.getCategory(categoryId)
        this.props.getProducts(categoryId)
        const header = $(".header-main")
        header.addClass("white-header")
        window.scrollTo(0, 0)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.categoryId != this.props.match.params.categoryId) {
            this.props.getProducts(this.props.match.params.categoryId)
        }
    }

    render() {
        const { products } = this.props
        return (
            <div>
                <HeaderContainer {...this.props}/>
                <div className="placement"></div>
                    <div className="products">
                        <FiltersComponent {...this.props} />
                        <div className="product-index-div">
                            {
                            products.map(product => (
                                <CategoryProductIndexItem {...this.props} product={product} key={product.id} getReviews={this.props.getReviews} reviews={this.props.reviews}/>
                            ))
                            }
                        </div>
                    </div>
                <Footer />
            </div>
        )
    }
}

export default CategoryProductIndex