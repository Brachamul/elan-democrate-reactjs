import React, { PropTypes } from 'react'
import { Input, ButtonInput, } from 'react-bootstrap'
import Title from '../components/Title'

const User = ({ username, url, portrait }) => (
	<div className="user">
		<h2 className="user__username">{username}</h2>
	</div>
)

User.propTypes = {
	username: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
	portrait: PropTypes.string.isRequired
}

export default User