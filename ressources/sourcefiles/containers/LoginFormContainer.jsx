import { connect } from 'react-redux'
import LoginForm from '../components/LoginForm'
import { setFormFieldValue, setFormFieldError, } from '../actions/forms'
import { logIn, } from '../actions/auth'

const mapStateToProps = (state, ownProps) => {
	console.log(state.formsState)
	return {
		fields: state.formsState.fields,
		fieldErrors: state.formsState.fieldErrors,
		isFetching: state.authState.isFetching,
		authToken: state.authState.authToken,
	}
}

const LoginFormContainer = connect(
	mapStateToProps,
	{ setFormFieldValue, logIn, }
)(LoginForm)

export default LoginFormContainer