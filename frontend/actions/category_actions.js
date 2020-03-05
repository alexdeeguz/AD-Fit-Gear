import * as CategoryAPIUtil from '../utils/category_utils'

export const RECEIVE_ALL_CATEGORIES = "RECEIVE_ALL_CATEGORIES"
export const RECEIVE_CATEGORY = "RECEIVE_CATEGORY"


const receiveAllCategories = (categories) => ({
    type: RECEIVE_ALL_CATEGORIES,
    categories
})

const receiveCategory = (category) => ({
    type: RECEIVE_CATEGORY,
    category
})

export const getCategories = () => dispatch => CategoryAPIUtil.getCategories()
    .then(categories => dispatch(receiveAllCategories(categories)))

export const getCategory = (id) => dispatch => CategoryAPIUtil.getCategory(id)
    .then(category => dispatch(receiveCategory(category))) 