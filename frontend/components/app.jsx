import React from 'react'
import HomeContainer from './containers/home_container'
import { Route, Switch } from 'react-router-dom';
import SignupContainer from './containers/signup_container'
import LoginContainer from './containers/login_container'
import CategoryIndexContainer from './containers/categories_container';
import CategoryProductIndexContainer from './containers/products_container';
import ProductShowContainer from './containers/product_show_container';
import SearchContainer from './containers/search_container';
import AccountContainer from './containers/account_container';
import { AuthRoute } from '../utils/route_utils'
import Error404 from './404'
import ContactUs from './contact_us';
import Training from './training'

const App = () => (
    <div>
        <Switch>
            <AuthRoute path="/login" component={LoginContainer} />
            <AuthRoute path="/signup" component={SignupContainer} />
            <Route exact path="/categories/:categoryId/products/:productId" component={ProductShowContainer} />
            <Route exact path="/categories/:categoryId/products" component={CategoryProductIndexContainer} />
            <Route exact path="/categories" component={CategoryIndexContainer} />
            <Route exact path="/search" component={SearchContainer} />
            <Route exact path="/account" component={AccountContainer} />
            <Route exact path="/contact-us" component={ContactUs} />
            <Route exact path="/training" component={Training} />
            <Route exact path="/" component={HomeContainer} />
            <Route component={Error404}/>
        </Switch>
    </div>
)

export default App