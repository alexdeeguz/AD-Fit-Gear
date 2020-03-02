import React from 'react'

class ProductItem extends React.Component {
    constructor(props) {
        super(props)
        console.log(props)
    }

    render() {
        const { item } = this.props
        const { name, price, description } = item
        return (
        <div>{item.name}</div>
        )
    }
}

export default ProductItem