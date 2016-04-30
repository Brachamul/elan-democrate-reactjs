import { connect } from 'react-redux'
import Page from '../components/Pages'

const mapStateToProps = (state, ownProps) => {
	console.log(state.formsState)
	return {
		authToken: state.authState.authToken,
	}
}

const App = connect(mapStateToProps)(Page)

export default App