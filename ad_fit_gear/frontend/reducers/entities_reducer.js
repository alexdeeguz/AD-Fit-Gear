import { combineReducers } from 'redux'
import UsersReducer from './users_reducer'
import CategoriesReducer from './categories_reducer'
import ProductsReducer from './products_reducer'

const EntitiesReducer = combineReducers({
    users: UsersReducer,
    categories: CategoriesReducer,
    products: ProductsReducer
})

export default EntitiesReducer