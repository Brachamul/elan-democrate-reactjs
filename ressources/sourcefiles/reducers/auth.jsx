function auth(
	state={
		isFetching: 	false,
		authToken: 		undefined,	// if success
	}, action) {
	switch (action.type) {
		case 'LOGIN_USER_REQUEST':
			return { ...state, isFetching: true }
		case 'LOGIN_USER_SUCCESS':
			return { ...state, isFetching: false, authToken: action.authToken }
		case 'LOGIN_USER_FAILURE':
			return { ...state, isFetching: false, status: action.status, statusText: action.statusText }
		default : 
			return state
	}
}

export default auth