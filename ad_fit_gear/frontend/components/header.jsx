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
    }

    closeModal(e) {
        // console.log(e.currentTarget)
        // e.currentTarget.className = "modal-hidden"
        const modal = $(".modal-container")
        modal.removeClass("show")
        modal.addClass("hidden")
    }

    openModal(e) {
        const modal = $(".modal-container") 
        modal.removeClass("hidden")
        modal.addClass("show")
    }

    go_to_login(e) {
        this.props.history.push('/login')
    }

    redirect_home(e) {
        this.props.history.push('/')
    }
    render() {
        return (

            <div className="header">
                <div className="icon-header">
                    <p>USD</p>
                    <div id="logo-icon" onClick={this.redirect_home}></div>
                    <div className="icons">
                        <div id="user-icon" onClick={this.go_to_login}></div>
                        <div id="search-icon"></div>
                        <div id="cart-icon" onClick={this.openModal}></div>
                        <div className="modal-container hidden" onClick={this.closeModal}>
                            <div id="myModal" className="modal">
                            </div>
                            <div className="modal-content">
                                <span onClick={this.closeModal} class="close">&times;</span>
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
                            <Link id="link" to="/categories/1/products">Tanks</Link>
                            <Link id="link" to="/categories/2/products">Shirts</Link>
                            <Link id="link" to="/categories/3/products">Hoodies</Link>
                            <Link id="link" to="/categories/4/products">Joggers</Link>
                            <Link id="link" to="/categories/6/products">Hats</Link>
                            <Link id="link" to="/categories/5/products">Lifting Gear</Link>
                        </div>
                    </div>
                    <a href="">TRAINING</a>
                    <a href="">CONTACT US</a>
                </nav>
            </div>
        )
    }
}

export default Header