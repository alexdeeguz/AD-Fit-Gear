import React from 'react'
import { Link } from 'react-router-dom'


class Header extends React.Component {

    constructor(props) {
        super(props)

        this.go_to_login = this.go_to_login.bind(this)
        this.redirect_home = this.redirect_home.bind(this)
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
                        <div id="cart-icon"></div>
                    </div>
                </div>
                <nav className="nav-bar">
                    <div className="dropdown">
                        <Link to="/categories" class="dropbtn">SHOP ⌄</Link>
                        <div className="droplinks">
                            <a><Link id="link" to="/categories/1/products">Tanks</Link></a>
                            <a><Link id="link" to="/categories/2/products">Shirts</Link></a>
                            <a><Link id="link" to="/categories/3/products">Hoodies</Link></a>
                            <a><Link id="link" to="/categories/4/products">Joggers</Link></a>
                            <a><Link id="link" to="/categories/5/products">Lifting Gear</Link></a>
                            <a><Link id="link" to="/categories/6/products">All Products</Link></a>
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