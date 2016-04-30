import { combineReducers } from 'redux'
import alerts from './alerts'
import forms from './forms'
import auth from './auth'

const rootAppReducers = combineReducers({
	alertsState: alerts,
	formsState: forms,
	authState: auth,
})

export default rootAppReducers