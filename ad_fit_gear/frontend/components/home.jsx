import React from 'react'
import { Link } from 'react-router-dom'
import CategoryIndexContainer from './containers/categories_container';

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.logout = this.logout.bind(this)
    }

    logout(e) {
        e.preventDefault()
        this.props.logout()
        this.props.history.push('/login')
    }

    render() {
        if (this.props.currentUser) {
        return (
            <div className="main">
                <h1>Welcome {this.props.currentUser.username}</h1>
                <button onClick={this.logout}>Log out</button>
                <button className="form-input" id="view-all-products-button" type="submit">VIEW ALL PRODUCTS</button>
                <CategoryIndexContainer {...this.props} />
            </div>
            )
        }
        return (   
            <div className="main">
                <div id="picture"></div>
                <button className="form-input" id="view-all-products-button" type="submit">VIEW ALL PRODUCTS</button>
                <CategoryIndexContainer {...this.props} />
            </div>
        )
    }
}

export default Home