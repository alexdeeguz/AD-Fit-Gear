import React from 'react'
import HeaderContainer from './containers/header_container';
import Footer from './footer'

class Account extends React.Component {
    constructor(props) {
        super(props)
        this.logout = this.logout.bind(this)
    }

    componentDidMount() {
        const header = $(".header-main")
        header.addClass("white-header")
        window.scrollTo(0, 0)
    }

    componentDidUpdate() {
        const header = $(".header-main")
        header.addClass("white-header")
    }

    logout(e) {
        e.preventDefault()
        this.props.logout()
        this.props.history.push('/login')
    }

    render() {
        if (this.props.currentUser) {
            return (
                <div className="account-container-main">
                    <HeaderContainer {...this.props}/>
                    <div>
                        <div className="placement"></div>
                        <div className="account-container">
                            <h5 onClick={this.logout}>LOG OUT</h5>
                            <h3>MY ACCOUNT</h3>
                            <p>Welcome back, {this.props.currentUser.username}!</p>

                            <div className="orders">
                                <div className="my-orders">
                                    <h5>MY ORDERS</h5><hr/>
                                    <p>You haven't placed any orders yet</p>
                                </div>

                                <div className="addresses">
                                    <h5>NO ADDRESSES</h5><hr/>
                                    <p>No addresses are currently saved</p>
                                    <button id="manage-address-button">MANAGE ADDRESSES</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            )
        }
        return null
    }
}

export default Account