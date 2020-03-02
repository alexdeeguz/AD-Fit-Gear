import React from 'react'

class CategoryProductIndexItem extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.props.history.push('/login')
    }

    render() {
        const { product } = this.props
        const { name, price, description } = product
        return (
            <div id="product-item" className="product-div">
                <div>
                    
                </div>
                <div>
                    <p>{name}</p>
                    <p>{price}</p>
                </div>
            </div>
        )
    }
}

export default CategoryProductIndexItem