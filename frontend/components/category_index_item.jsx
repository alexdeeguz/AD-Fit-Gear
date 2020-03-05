import React from 'react'

class CategoryIndexItem extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.props.history.push(`/categories/${this.props.category.id}/products`)
    }

    render() {
        return (
            // id = { this.props.category.name }
            <div  id="category-item" className="category-div">
                <div className="view-product-button-container">
                    {this.props.category.name === "gear" ? <p>LIFTING GEAR</p> : <p>{this.props.category.name.toUpperCase()}</p> }
                    <b><button id="view-product-button" onClick={this.handleClick}>VIEW PRODUCTS</button></b>
                </div>
            </div>
        )
    }
}

export default CategoryIndexItem