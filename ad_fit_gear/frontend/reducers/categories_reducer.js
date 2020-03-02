import { RECEIVE_ALL_CATEGORIES, RECEIVE_CATEGORY } from '../actions/category_actions'


const CategoriesReducer = (state = {}, action) => {
    Object.freeze(state)
    const newState = Object.assign({}, state)

    switch(action.type) {
        case RECEIVE_ALL_CATEGORIES:
            return action.categories
        case RECEIVE_CATEGORY:
            newState[action.category.id] = action.category
            return newState
        default: 
            return state
    }
}

export default CategoriesReducer