import { connect } from 'react-redux'
import SessionForm from '../session_form'
import { log_in, removeErrors } from '../../actions/session_actions'

const mSTP = (state) => ({
    errors: state.errors,
    formType: 'login'
})

const mDTP = dispatch => ({
    login: (user) => dispatch(log_in(user)),
    removeErrors: () => dispatch(removeErrors())
})

export default connect(mSTP, mDTP)(SessionForm)