import { connect } from 'react-redux'
import Propositions from '../components/Propositions'
import { viewPropositionDetail } from '../actions/propositions'

const mapStateToProps = (state, ownProps) => {
	return {
		propositions: state.propositionsState
	}
}

const PropositionsContainer = connect(
	mapStateToProps,
	{viewPropositionDetail}
)(Propositions)

export default PropositionsContainer

