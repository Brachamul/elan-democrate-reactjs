import axios from 'axios'
import { newAlert, clearAllAlerts, } from '../actions/alerts'
import { setFormFieldValue, setFormFieldError, } from '../actions/forms'


export const loginUserRequest = () => {
	return {
		type: 'LOGIN_USER_REQUEST',
	}
}

export const loginUserFailure = (error) => {
	return {
		type: 'LOGIN_USER_FAILURE',
		status: error.response.status,
		statusText: error.response.statusText,
	}
}

export const loginUserSuccess = (authToken) => {
	return {
		type: 'LOGIN_USER_SUCCESS',
		authToken,
	}
}


export const logIn = (fields) => {
	console.log(fields)
	console.log(`logging in with username ${fields.username} and password ${fields.password}`)
	return dispatch => {
		dispatch(loginUserRequest())
		dispatch(clearAllAlerts())
		return axios.post('http://localhost:8000/obtain-auth-token/', fields
		).then(response => {
			console.log(response)
			dispatch(loginUserSuccess("Token " + response.data.token))
			console.log(response.data.token)
		}).catch(response => {
			for (let property in response.data) {
				let value = response.data[property]
				if (property == 'non_field_errors') { dispatch(newAlert('danger', value )) } 
				if (fields[property] !== 'undefined') { dispatch(setFormFieldError(property, value )) } // dispatch error text to fields
			}
		})
	}
}