import * as SessionAPIUtil from '../utils/session_utils'

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER"
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER"
export const RECEIVE_ERRORS = "RECEIVE_ERRORS"


const receiveCurrentUser = (user) => ({
    type: RECEIVE_CURRENT_USER,
    user
})

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
})

const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors: errors
})

export const log_in = user => dispatch => SessionAPIUtil.login(user)
    .then(user => dispatch(receiveCurrentUser(user)),
        error => dispatch(receiveErrors(error.responseJSON)))

export const log_out = () => dispatch => SessionAPIUtil.logout()
    .then(() => dispatch(logoutCurrentUser()))

export const sign_up = user => dispatch => SessionAPIUtil.signup(user)
    .then(user => dispatch(receiveCurrentUser(user)), 
        error => dispatch(receiveErrors(error.responseJSON)))