import React from 'react'
import ReactDOM from 'react-dom'
import Root from './components/root'
import configureStore from './store/store'
import { log_in, log_out } from './actions/session_actions'
import { getCategories, getCategory } from './actions/category_actions'
import { getProducts, getProduct } from './actions/product_actions'
import { getCartItems, deleteCartItem, addToCart } from './actions/cart_item_actions'
import { getCart } from './actions/cart_actions'

document.addEventListener("DOMContentLoaded", () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    const root = document.getElementById('root')
    window.getState = store.getState
    window.dispatch = store.dispatch
    window.getCategories = getCategories
    window.getCategory = getCategory
    window.getProduct = getProduct
    window.getProducts = getProducts
    window.getCartItems = getCartItems
    window.deleteCartItem = deleteCartItem
    window.addToCart = addToCart
    window.getCart = getCart
    window.login = log_in
    window.logout = log_out
    ReactDOM.render(<Root store={store}/>, root)
})