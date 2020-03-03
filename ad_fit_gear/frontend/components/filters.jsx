import React from 'react'
import { Link } from 'react-router-dom'

class Filters extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        this.props.getProducts(e.target.id)
    }

    render() {
        return (
            <div className="filters">
                <h6>FILTERS</h6>
                    <li id="1" onClick={this.handleClick}>Tanks</li>
                    <li id="2" onClick={this.handleClick}>Shirts</li>
                    <li id="3" onClick={this.handleClick}>Hoodies</li>
                    <li id="4" onClick={this.handleClick}>Joggers</li>
                    <li id="5" onClick={this.handleClick}>Hats</li>
                    <li id="6" onClick={this.handleClick}>Lifting Gear</li>
            </div>
        )
    }
}

export default Filters