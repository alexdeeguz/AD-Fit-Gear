import React from 'react'

class Account extends React.Component {
    constructor(props) {
        super(props)
        this.logout = this.logout.bind(this)
    }

    componentDidMount() {
        const header = $(".header-main")
        header.addClass("white-header")
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
                <div>
                    <div className="placement"></div>
                    <div className="account-container">
                        <h1>Welcome {this.props.currentUser.username}</h1>
                        <button onClick={this.logout}>Log out</button>
                    </div>
                </div>
            )
        }
        return null
    }
}

export default Account