import React from 'react'

class Images extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        this.setState({
            selected: e.target.id
        })
    }

    render() {
        return (
            <div className="product-show-images-container">
                <div className="image-clicks">
                    <li className="image-click">
                        <img id="0" src={this.props.product.photoUrls[0]} className={this.state.selected === "0" ? "selected-image" : "imagee"} onClick={this.handleClick}/>
                    </li>
                    <li className="image-click">
                        <img id="1" src={this.props.product.photoUrls[1]} className={this.state.selected === "1" ? "selected-image" : "imagee"} onClick={this.handleClick}/>
                    </li>
                    <li className="image-click">
                        <img id="2" src={this.props.product.photoUrls[2]} className={this.state.selected === "2" ? "selected-image" : "imagee"} onClick={this.handleClick}/>
                    </li>
                </div>
                <div className="main-product-image">
                    <img src={this.props.product.photoUrls[this.state.selected]} className="imagee"/>
                </div>
            </div>
        )
    }
}

export default Images