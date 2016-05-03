import React, { Component, PropTypes } from 'react'
import { Grid, } from 'react-bootstrap'
import Header from '../components/Header'
import Alerts from '../components/Alerts'
import LoginFormContainer from '../containers/LoginFormContainer'
import AlertsContainer from '../containers/AlertsContainer'


const Page = ({authToken}) => (
	!authToken ? <LoginPage/> : <EmptyPage/>
)

const LoginPage = () => (
	<div className="loginPage">
		<Header/>
		<Grid fluid>
			<div className="row-fluid">
				<AlertsContainer />
			</div>
			<div className="row-fluid well">
				<LoginFormContainer title="Connexion" titleLevel={1} />
			</div>
		</Grid>
	</div>
)

const EmptyPage = () => (
	<div className="emptyPage">
		<Header/>
		<Grid fluid>
			<div className="row-fluid">
				<AlertsContainer />
			</div>
			<div className="row-fluid well">
				<p>This is an empty page !</p>
			</div>
		</Grid>
	</div>
)

export default Page