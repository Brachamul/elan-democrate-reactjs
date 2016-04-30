function alerts(state=[], action) {
	switch (action.type) {
		case 'NEW_ALERT' :
			return [
				...state,
				{
					level : action.level, // success, info, warning or danger
					text : action.text
				}
			]
		case 'DISMISS_ALERT' :
			return [
				...state.slice(0, action.index),
				...state.slice(action.index + 1)
				// Can't use splice to avoid mutating the state
				// Instead, concatenating the array before my object and the one after
			]
		case 'CLEAR_ALL_ALERTS':
			return []
		default:
			return state
	}	
}

export default alerts