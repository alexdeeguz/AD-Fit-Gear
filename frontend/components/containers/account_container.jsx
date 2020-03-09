import { connect } from 'react-redux'
import Account from '../account'
import { sign_up, log_in, log_out } from '../../actions/session_actions'

const mSTP = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id]
})

const mDTP = dispatch => ({
    login: (user) => dispatch(log_in(user)),
    logout: () => dispatch(log_out())
})



export default connect(mSTP, mDTP)(Account)