import React from 'react'
import HomeContainer from './containers/home_container'
import { Route, Switch } from 'react-router-dom';
import SignupContainer from './containers/signup_container'
import LoginContainer from './containers/login_container'
import CategoryIndexContainer from './containers/categories_container';
import CategoryProductIndexContainer from './containers/products_container';
import ProductShowContainer from './containers/product_show_container';
import HeaderContainer from './containers/header_container';
import SearchContainer from './containers/search_container';
import AccountContainer from './containers/account_container';
import AuthRoute from '../utils/route_utils'
const App = () => (
    <div>
        <Route path="/" component={HeaderContainer} />
        <Switch>
            <AuthRoute path="/login" component={LoginContainer} />
            <AuthRoute path="/signup" component={SignupContainer} />
            <Route exact path="/categories/:categoryId/products/:productId" component={ProductShowContainer} />
            <Route exact path="/categories/:categoryId/products" component={CategoryProductIndexContainer} />
            <Route exact path="/categories" component={CategoryIndexContainer} />
            <Route exact path="/search" component={SearchContainer} />
            <Route exact path="/account" component={AccountContainer} />
            <Route path="/" component={HomeContainer} />
        </Switch>
    </div>
)

export default App