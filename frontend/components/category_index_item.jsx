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
        const id = this.props.category.name
        return (
            // id = { this.props.category.name }
            <div  id="category-item" className="category-div">
                {id === "hoodies" ? <img id={id} src={window.hoodieURL}/> : ""}
                {id === "gear" ? <img id={id} src={window.gearURL}/> : ""}
                {id === "joggers" ? <img id={id} src={window.joggersURL}/> : ""}
                {id === "shirts" ? <img id={id} src={window.shirtsURL}/> : ""}
                {id === "hats" ? <img id={id} src={window.hatsURL}/> : ""}
                {id === "tanks" ? <img id={id} src={window.ryanURL}/> : ""}
                <div className="view-product-button-container">
                    {this.props.category.name === "gear" ? <p>LIFTING GEAR</p> : <p>{this.props.category.name.toUpperCase()}</p> }
                    <b><button id="view-product-button" onClick={this.handleClick}>VIEW PRODUCTS</button></b>
                </div>
            </div>
        )
    }
}

export default CategoryIndexItem