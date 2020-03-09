import React from 'react'
import CategoryIndexItem from './category_index_item'

class CategoryIndex extends React.Component {
    constructor(props) {
        super(props)
    }


    componentDidMount() {
        const header = $(".header-main")
        header.addClass("white-header")
        this.props.getCategories()
    }

    componentDidUpdate(prevProps) {
        const header = $(".header-main")
        header.addClass("white-header")
    }

    render() {
        const { categories } = this.props

        return (
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
        )
    }
}

export default CategoryIndex