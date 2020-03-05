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

    componentDidMount() {
        this.props.getCategories()
    }

    handleClick(e) {
        this.setState({
            selected: e.target.innerHTML
        })
        this.props.getProducts(e.target.id)
    }

    render() {
       
        const id1 = this.props.categories[0] ? this.props.categories[0].id : ""
        const id2 = this.props.categories[1] ? this.props.categories[1].id : ""
        const id3 = this.props.categories[2] ? this.props.categories[2].id : ""
        const id4 = this.props.categories[3] ? this.props.categories[3].id : ""
        const id5 = this.props.categories[4] ? this.props.categories[4].id : ""
        const id6 = this.props.categories[5] ? this.props.categories[5].id : ""
        return (
            <div className="filters">
                <h6>FILTERS</h6>
                    <li id={id1} className={this.state.selected === "Tanks" ? "selected-filter" : "non-selected-filter"} onClick={this.handleClick}>Tanks</li>
                    <li id={id2} className={this.state.selected === "Shirts" ? "selected-filter" : "non-selected-filter"} onClick={this.handleClick}>Shirts</li>
                    <li id={id3} className={this.state.selected === "Hoodies" ? "selected-filter" : "non-selected-filter"} onClick={this.handleClick}>Hoodies</li>
                    <li id={id4} className={this.state.selected === "Joggers" ? "selected-filter" : "non-selected-filter"} onClick={this.handleClick}>Joggers</li>
                    <li id={id5} className={this.state.selected === "Hats" ? "selected-filter" : "non-selected-filter"} onClick={this.handleClick}>Hats</li>
                    <li id={id6} className={this.state.selected === "Lifting Gear" ? "selected-filter" : "non-selected-filter"} onClick={this.handleClick}>Lifting Gear</li>
            </div>
        )
    }
}

export default Filters