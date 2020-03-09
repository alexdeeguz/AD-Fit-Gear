import React from 'react'

class Footer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="main-footer-container">
                <div className="footer-container">
                    <div className="footer-about">
                        <h5>ABOUT THE SHOP</h5>
                        <p>ADFitGear, the official store of Alex De Guzman</p>
                        <div className="footer-icons">
                            <a href="https://github.com/alexdeeguz/AD-Fit-Gear"><img src={window.githubURL} id="footer-github-logo" /></a>
                            <a href="https://www.linkedin.com/in/alex-de-guzman-491728163/"><img src={window.linkedinURL} id="footer-linked-in-logo" /></a>
                        </div>
                    </div>

                    <div className="footer-links">
                        <h5>Footer</h5>
                        <li><a>Search</a></li>
                        <li><a>About Us</a></li>
                        <li><a>FAQ</a></li>
                        <li><a>Returns and Exchange</a></li>
                        <li><a>Contact Us!</a></li >
                        <li><a>Sale</a></li >
                    </div>

                    <div className="footer-newsletter">
                        <h5>NEWSLETTER</h5>
                        <p>Subscribe to receive updates, access to exclusive deals, and more.</p>
                        <input id="newsletter-email-input" type="text" placeholder="Enter your email address" /><br/>
                        <button id="subscribe-button">SUBSCRIBE</button>
                    </div>
                </div>
                <div className="payment-images">
                    <div className="footer-logo-name">
                        <h5>© ADFITGEAR</h5> 
                    </div>
                    <div className="payments">
                        <img src={window.card1URL} />
                        <img src={window.card2URL} />
                        <img src={window.card3URL} />
                        <img src={window.card4URL} />
                        <img src={window.card5URL} />
                        <img src={window.card6URL} />
                        <img src={window.card7URL} />
                        <img src={window.card8URL} />
                        <img src={window.card9URL} />
                        <img src={window.card10URL} />
                        <img src={window.card11URL} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer