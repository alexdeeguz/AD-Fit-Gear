import React from 'react'
import CategoryIndexItem from './category_index_item'
import HeaderContainer from './containers/header_container'
import Footer from './footer'
class CategoryIndex extends React.Component {
    constructor(props) {
        super(props)
    }


    componentDidMount() {
        const header = $(".header-main")
        header.addClass("white-header")
        this.props.getCategories()
        window.scrollTo(0, 0)
    }

    render() {
        const { categories } = this.props

        return (
            <div>
            <HeaderContainer {...this.props} />
            <div className="categories">
                <div className="placement"></div>
                <h4>ALL CATEGORIES</h4>
                <div className="category-index-div">
                    {
                    categories.map(category => (
                        <CategoryIndexItem {...this.props} category={category} key={category.id} />
                    ))
                    }
                </div>
            </div>
            <Footer />
            </div>
        )
    }
}

export default CategoryIndex