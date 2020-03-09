import React from 'react'
import { Link } from 'react-router-dom'
import CartItemsContainer from './containers/cart_items_container'

class Header extends React.Component {

    constructor(props) {
        super(props)
        this.go_to_login = this.go_to_login.bind(this)
        this.redirect_home = this.redirect_home.bind(this)
        this.closeModal = this.closeModal.bind(this)
        this.openModal = this.openModal.bind(this)
        this.go_to_search = this.go_to_search.bind(this)
    }

    componentDidMount() {
        this.props.getCategories()
    }

    closeModal() {
        const modal = $(".modal-container")
        modal.removeClass("show")
        modal.addClass("hidden")
    }

    openModal() {
        const modal = $(".modal-container") 
        modal.removeClass("hidden")
        modal.addClass("show")
    }

    go_to_login() {
        if (this.props.currentUser) {
            this.props.history.push('/account')
        } else {
        this.props.history.push('/login')
        }
    }

    redirect_home() {
        this.props.history.push('/')
    }

    go_to_search() {
        this.props.history.push('/search')
    }

    render() {
        const id1 = this.props.categories[0] ? this.props.categories[0].id : ""
        const id2 = this.props.categories[1] ? this.props.categories[1].id : ""
        const id3 = this.props.categories[2] ? this.props.categories[2].id : ""
        const id4 = this.props.categories[3] ? this.props.categories[3].id : ""
        const id5 = this.props.categories[4] ? this.props.categories[4].id : ""
        const id6 = this.props.categories[5] ? this.props.categories[5].id : ""
        return (
            <div>
                <div className="header-main">
                    <div className="icon-header">
                        <p>USD</p>
                        <h1 onClick={this.redirect_home}>AD</h1>
                        <div className="icons">
                            <img id="user-icon" src={window.userURL} onClick={this.go_to_login}/>
                            <img id="search-icon" src={window.searchURL} onClick={this.go_to_search}/>
                            <img id="cart-icon" src={window.cartURL} onClick={this.openModal}/>
                            <div className="modal-container hidden" onClick={this.closeModal}>
                                <div className="modal">
                                </div>
                                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                                    <span onClick={this.closeModal} className="close">&times;</span>
                                    <h2>CART</h2><hr/>
                                    <CartItemsContainer {...this.props}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <nav className="nav-bar">
                        <div className="dropdown">
                            <Link to="/categories" className="dropbtn">SHOP ⌄</Link>
                            <div className="droplinks">
                                <Link id="link" to={`/categories/${id1}/products`}>Tanks</Link>
                                <Link id="link" to={`/categories/${id2}/products`}>Shirts</Link>
                                <Link id="link" to={`/categories/${id3}/products`}>Hoodies</Link>
                                <Link id="link" to={`/categories/${id4}/products`}>Joggers</Link>
                                <Link id="link" to={`/categories/${id5}/products`}>Hats</Link>
                                <Link id="link" to={`/categories/${id6}/products`}>Lifting Gear</Link>
                            </div>
                        </div>
                        <a href="">TRAINING</a>
                        {/* <a href="">CONTACT US</a> */}
                        <Link to="/contact-us">CONTACT US</Link>
                    </nav>
                </div>
            </div>
        )
    }
}

export default Header