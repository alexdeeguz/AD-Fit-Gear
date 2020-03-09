import React from 'react'
import { Link } from 'react-router-dom'
import HeaderContainer from './containers/header_container';
import Footer from './footer'

class SessionForm extends React.Component {
    constructor(props) {
        super(props)
        this.updateUsername = this.updateUsername.bind(this)
        this.updatePassword = this.updatePassword.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.demoLogin = this.demoLogin.bind(this)

        this.state = {
            username: "",
            password: ""
        }
        
    }

    componentDidMount() {
        const header = $(".header-main")
        header.addClass("white-header")
        this.props.removeErrors()
    }

    // componentDidUpdate(prevProps) {
    //     if (prevProps.match.url !== this.props.match.url) {
    //         this.props.removeErrors()
    //     }
    // }


    demoLogin(e) {
        e.preventDefault()
        const user = {
            username: "demo-user",
            password: "password"
        }
        this.props.login(user)
            .then(() => this.props.history.push('/'))
    }



    handleSubmit(e) {
        e.preventDefault()
        const user = {
            username: this.state.username,
            password: this.state.password
        }
        if (this.props.formType === "sign up") {
            this.props.signup(user)
                .then(() => this.props.history.push('/'))
        } else {
            this.props.login(user)
                .then(() => this.props.history.push('/'))
        }
        this.setState({
            username: "",
            password: ""
        })
    }

    updateUsername(e) {
        this.setState({
            username: e.target.value
        })
    }

    updatePassword(e) {
        this.setState({
            password: e.target.value
        })
    }


    render() {
        const formType = this.props.formType
        const linkToSignup = formType === "sign up" ? <p>Have an account? <Link to="/login">Login</Link></p> : <p>Don't have an account? <Link to="/signup">Create one</Link></p>

        return (
            <div>
                <HeaderContainer {...this.props}/>
                <div className="main">
                    <div className="placement"></div>
                    <h1>{formType.toUpperCase()}</h1>
                    <p>{this.props.message}</p>
                    <div>
                        <form onSubmit={this.handleSubmit}>
                            <label>
                                <input className="form-input" type="text" onChange={this.updateUsername} value={this.state.username} placeholder="Username" />
                            </label>
                            <br />
                            <label>
                                <input className="form-input" type="password" onChange={this.updatePassword} value={this.state.password} placeholder="Password" />
                            </label>
                            <br />
                            <button className="form-input" id="button" type="submit">{formType.toUpperCase()}</button>
                            <br/>
                            {this.props.formType === "login" ? <button className="form-input" id="demo-button" onClick={this.demoLogin}>DEMO LOGIN</button> : ""}
                             <br />
                            {
                                this.props.errors.session.map(error => (
                                    <p className="errors">{error}</p>
                                ))
                            }
                            {linkToSignup}
                        </form>
                    </div>
                </div>
                <Footer /> 
            </div>
        )
    }
}

export default SessionForm