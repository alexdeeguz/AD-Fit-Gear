import React from 'react'
import { Link } from 'react-router-dom'

class Filters extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.state = {
            selected: ""
        }
    }

    handleClick(e) {
        this.setState({
            selected: e.target.innerHTML
        })
        this.props.getProducts(e.target.id)
    }

    render() {
        return (
            <div className="filters">
                <h6>FILTERS</h6>
                    <li id="1" className={this.state.selected === "Tanks" ? "selected-filter" : "non-selected-filter"} onClick={this.handleClick}>Tanks</li>
                    <li id="2" className={this.state.selected === "Shirts" ? "selected-filter" : "non-selected-filter"} onClick={this.handleClick}>Shirts</li>
                    <li id="3" className={this.state.selected === "Hoodies" ? "selected-filter" : "non-selected-filter"} onClick={this.handleClick}>Hoodies</li>
                    <li id="4" className={this.state.selected === "Joggers" ? "selected-filter" : "non-selected-filter"} onClick={this.handleClick}>Joggers</li>
                    <li id="5" className={this.state.selected === "Hats" ? "selected-filter" : "non-selected-filter"} onClick={this.handleClick}>Hats</li>
                    <li id="6" className={this.state.selected === "Lifting Gear" ? "selected-filter" : "non-selected-filter"} onClick={this.handleClick}>Lifting Gear</li>
            </div>
        )
    }
}

export default Filters