import React from 'react'
import HomeContainer from '../components/containers/home_container'
import { Route, Switch } from 'react-router-dom';
import SignupContainer from './containers/signup_container'
import LoginContainer from './containers/login_container'
import Header from './header';
import CategoryIndexContainer from './containers/categories_container';
import CategoryProductIndexContainer from './containers/products_container';
import ProductShowContainer from './containers/product_show_container';
import HeaderContainer from './containers/header_container';

const App = () => (
    <div>
        <Route path="/" component={HeaderContainer} />
        <Switch>
            <Route path="/login" component={LoginContainer} />
            <Route path="/signup" component={SignupContainer} />
            <Route exact path="/categories/:categoryId/products/:productId" component={ProductShowContainer} />
            <Route exact path="/categories/:categoryId/products" component={CategoryProductIndexContainer} />
            <Route exact path="/categories" component={CategoryIndexContainer} />
            <Route path="/" component={HomeContainer} />
        </Switch>
    </div>
)

export default App