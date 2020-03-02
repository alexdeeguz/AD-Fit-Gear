import React from 'react'

class CategoryProductIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { product } = this.props
        const { name, price, description } = product
        return (
            <div id="product-item" className="product-div">
                <div id="img">
                    
                </div>
                <div class="listing-description">
                    <p>{name.toUpperCase()}</p>
                    <p>${price}</p>
                </div>
            </div>
        )
    }
}

export default CategoryProductIndexItem