import React from 'react'
import HeaderContainer from './containers/header_container'
import Footer from './footer'

class ContactUs extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const header = $(".header-main")
        header.addClass("white-header")
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div className="contact-us-container">
                <HeaderContainer {...this.props}/>
                <div className="placement"></div>
                <div className="contact-us-content">
                    <h3>CONTACT US!</h3>
                    <p>Please visit our FAQ in order to answer all your questions.</p><br/>
                    <p>If you still have any questions about your order, please feel free to call from 9:30 to 5:00 pm PST</p>
                    <p>Or email us at support@adfitgear.com</p><br/><br/>
                    <b>Returns and Exchanges</b>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Duis malesuada, risus vel sagittis cursus, est ligula 
                        consequat turpis, et cursus sem nibh eu augue. Aliquam 
                        efficitur enim ut tellus dapibus, posuere ullamcorper 
                        turpis sollicitudin. Donec ullamcorper mauris id dictum 
                        ultrices. Vivamus vel iaculis est. Praesent sit amet fringilla 
                        diam, non molestie est. Suspendisse ut elementum purus. 
                        Suspendisse luctus mattis mauris vitae pulvinar. Mauris 
                        pharetra fermentum odio, vitae ornare risus luctus ac. 
                        Nulla facilisi. Ut nec gravida ex, ac eleifend ligula. 
                        Vestibulum dictum gravida lorem eu lacinia. Proin a vehicula leo. 
                        Donec fringilla lectus ac purus suscipit, et consectetur 
                        metus auctor. Sed mattis lectus sed tortor sagittis tincidunt. 
                        Donec gravida et augue a malesuada.</p>

                    <p>ADFIT GEAR</p>
                    <p>Note: PLEASE MAKE SURE YOU ADD ORDER NUMBER AND EXCHANGE/REFUND REQUEST INSIDE THE PACKAGE</p>
                    <p>PLEASE DO NOT PASTE PACKING SLIP ON THE BAG. If items are not 
                        in stock at the time we receive your item, you will be receiving 
                        a refund for it. For all returns and exchanges, the customer 
                        is responsible for paying for the shipping in order to send the 
                        product back to us. We will cover the shipping in order to send the 
                        product back to you if you get an exchange. Also, the shipping amount 
                        paid is also not refunded when an item is returned.</p><br/>
                    <p>Once we receive your package back, please give us 1-2 weeks for us to process your return and exchange.</p>
                    <br/><br/>
                    <b>International Orders</b>
                    <p>Quisque vitae porta lacus, ut pretium massa. Fusce non risus neque. Vivamus fringilla aliquet tempus. Phasellus at rutrum libero, eget auctor sapien.</p>
                    <b>Shipping and Handling</b>
                    <p>Ut vitae varius eros. Nam sit amet neque in lacus tincidunt fringilla. 
                        Fusce bibendum ac purus nec semper. Ut nibh odio, eleifend non dui et, 
                        tincidunt dignissim libero. Curabitur venenatis, nisl eu luctus pulvinar, 
                        felis dolor egestas mauris, non luctus felis mi vel magna. Pellentesque id 
                        tellus sem. Integer euismod sodales laoreet. Sed volutpat, lorem in pulvinar 
                        euismod, nunc elit sollicitudin metus, porttitor lacinia quam elit vitae erat. 
                        Curabitur quis velit venenatis, dignissim quam sit amet, viverra lorem. Donec 
                        fringilla quam ac sollicitudin rutrum. Quisque enim ipsum, aliquet id magna id, 
                        efficitur aliquet diam.</p>
                </div>
                <p id="contact-closing">ADFIT ☺︎</p>
                <Footer />
            </div>
        )
    }
}

export default ContactUs