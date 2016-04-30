import React, { PropTypes } from 'react'
import { Button, FormGroup, ControlLabel, FormControl, HelpBlock, } from 'react-bootstrap'
import Title from '../components/Title'

const LoginForm = ({title, titleLevel, fields, fieldErrors, isFetching, setFormFieldValue, logIn }) => (
	<form onSubmit={e => { e.preventDefault(); logIn(fields) } } role="form">
		<Title title={title} titleLevel={titleLevel} />
		<hr/>
		<FormGroup controlId="formBasicText" >
			<ControlLabel>
				Nom d'utilisateur
			</ControlLabel>
			<FormControl
				type="text"
				onChange={e => setFormFieldValue("username", e.target.value)}
				maxLength="32"
				autoCapitalize="off"
				autoCorrect="off"
				autofocus=""
				/>
			<FormControl.Feedback/> 
			<HelpBlock validationState="error">{fieldErrors.username}</HelpBlock>
		</FormGroup>
		<FormGroup controlId="formBasicText" >
			<ControlLabel>
				Mot de passe
			</ControlLabel>
			<FormControl
				type="password"
				onChange={e => setFormFieldValue("password", e.target.value)}
				maxLength="64"
				autoCapitalize="off"
				autoCorrect="off"
				/>
			<FormControl.Feedback/> 
			<HelpBlock validationState="error">{fieldErrors.password}</HelpBlock>
		</FormGroup>
		<Button type="submit" value="Log in" bsStyle="primary" block>
			Connexion
		</Button>
	</form>
)

export default LoginForm