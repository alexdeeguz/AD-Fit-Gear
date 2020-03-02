import * as ProductAPIUtil from '../utils/product_utils'

export const RECEIVE_ALL_PRODUCTS = "RECEIVE_ALL_PRODUCTS"
export const RECEIVE_PRODUCT = "RECEIVE_PRODUCT"


const receiveAllProducts = (products) => ({
    type: RECEIVE_ALL_PRODUCTS,
    products
})

const receiveProduct = (product) => ({
    type: RECEIVE_PRODUCT,
    product
})

export const getProducts = (categoryId) => dispatch => ProductAPIUtil.getProducts(categoryId)
    .then(products => dispatch(receiveAllProducts(products)))

export const getProduct = (categoryId, productId) => dispatch => ProductAPIUtil.getProduct(categoryId, productId)
    .then(product => dispatch(receiveProduct(product))) 