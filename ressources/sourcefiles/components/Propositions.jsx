import React from 'react'
import { Button, } from 'react-bootstrap'

const Propositions = ({ propositions, viewPropositionDetail }) => (
	<div className="propositions">
		{propositions.map(proposition =>
			<div class="card proposition">
				<div class="card-block">
					<h4 class="card-title">{proposition.title}</h4>
					<p>Proposé le {proposition.date_created} par {proposition.author}</p>
					<Button bsStyle="default" block>Consulter</Button>
				</div>
			</div>
		)}
	</div>
)

export default Propositions