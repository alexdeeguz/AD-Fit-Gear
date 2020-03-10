import React from 'react'

class Images extends React.Component {
    constructor(props) {
        super(props)
        console.log(this.props)
    }

    render() {
        return (
            <div className="product-show-images-container">
                <div className="image-clicks">
                    <li>test</li>
                    <li>test</li>
                    <li>test</li>
                </div>
                <div className="main-product-image">
                    <img src={this.props.product.photoUrl} className="imagee"/>
                </div>
            </div>
        )
    }
}

export default Images