import React from 'react'
import CategoryIndexItem from './category_index_item'

class CategoryIndex extends React.Component {
    constructor(props) {
        super(props)
    }


    componentDidMount() {
        this.props.getCategories()
    }

    render() {
        const { categories } = this.props

        return (
            <div className="categories">
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