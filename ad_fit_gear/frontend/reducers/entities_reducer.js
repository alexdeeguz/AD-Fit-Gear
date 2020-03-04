import { combineReducers } from 'redux'
import UsersReducer from './users_reducer'
import CategoriesReducer from './categories_reducer'
import ProductsReducer from './products_reducer'
import CartItemsReducer from './cart_item_reducer'

const EntitiesReducer = combineReducers({
    users: UsersReducer,
    categories: CategoriesReducer,
    products: ProductsReducer,
    cartItems: CartItemsReducer
})

export default EntitiesReducer