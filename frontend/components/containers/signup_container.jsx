import { connect } from 'react-redux'
import SessionForm from '../session_form'
import { sign_up } from '../../actions/session_actions'

const mSTP = (state) => ({
    errors: state.errors,
    formType: 'sign up'
})

const mDTP = dispatch => ({
    signup: (user) => dispatch(sign_up(user)),
})

export default connect(mSTP, mDTP)(SessionForm)