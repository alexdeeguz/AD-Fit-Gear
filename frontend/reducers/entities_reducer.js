import { combineReducers } from 'redux'
import UsersReducer from './users_reducer'
import CategoriesReducer from './categories_reducer'
import ProductsReducer from './products_reducer'
import CartItemsReducer from './cart_item_reducer'
import CartReducer from './cart_reducer'
import ReviewsReducer from './reviews_reducer'

const EntitiesReducer = combineReducers({
    users: UsersReducer,
    cart: CartReducer,
    categories: CategoriesReducer,
    products: ProductsReducer,
    cartItems: CartItemsReducer,
    reviews: ReviewsReducer
})

export default EntitiesReducer