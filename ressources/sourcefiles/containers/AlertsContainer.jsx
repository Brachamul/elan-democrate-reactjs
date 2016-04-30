import { connect } from 'react-redux'
import Alerts from '../components/Alerts'
import { dismissAlert } from '../actions/alerts'

const mapStateToProps = (state, ownProps) => {
	return {
		alerts: state.alertsState
	}
}

const AlertsContainer = connect(
	mapStateToProps,
	{dismissAlert}
)(Alerts)

export default AlertsContainer