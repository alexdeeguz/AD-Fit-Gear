import React from 'react'
import { Link } from 'react-router-dom'
import CategoryIndexContainer from './containers/categories_container';
import HeaderContainer from './containers/header_container'
class Home extends React.Component {
    constructor(props) {
        super(props)
        this.demoLogin = this.demoLogin.bind(this)
    }

    demoLogin(e) {
        e.preventDefault()
        const user = {
            username: "demo-user",
            password: "password"
        }
        this.props.login(user)
            .then(() => this.props.history.push('/categories'))
    }

    render() {
        return (
            <div>
                <HeaderContainer {...this.props}/>
                <div className="main">
                    <img className="home-pic" src={window.splashPicURL} />
                    <button className="form-input" id="shop-now-button" onClick={() => this.props.history.push("/categories")}>SHOP NOW</button>
                    <button className="form-input" id="demo-shop-button" onClick={this.demoLogin}>DEMO SHOP</button>
                    <div className="social-container">
                        <a href="https://github.com/alexdeeguz/AD-Fit-Gear"><img src={window.githubURL} id="github-logo" /></a>
                        <a href="https://www.linkedin.com/in/alex-de-guzman/"><img src={window.linkedinURL} id="linked-in-logo" /></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home