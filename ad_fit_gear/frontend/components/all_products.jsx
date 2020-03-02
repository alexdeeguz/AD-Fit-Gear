import React from 'react'
import FiltersComponent from './filters'
import { Route, Switch } from 'react-router-dom';
import CategoryProductIndexContainer from './containers/products_container';

class AllProducts extends React.Component {
    constructor(props) {
        super(props)
        // console.log(props)
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/allproducts" component={CategoryProductIndexContainer} />
                </Switch>
            </div>
        )
    }
}

export default AllProducts