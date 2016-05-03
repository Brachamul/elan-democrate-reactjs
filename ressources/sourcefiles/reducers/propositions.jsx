function propositions(state=[], action) {
	switch (action.type) {
		case 'CREATE_PROPOSITION' :
			return [
				...state,
				{
					title : action.title,
					text: action.text,
				}
			]
		case 'UPDATE_PROPOSITION':
			return []
		case 'DELETE_PROPOSITION':
			return [
				...state.slice(0, action.index),
				...state.slice(action.index + 1)
				// Can't use splice to avoid mutating the state
				// Instead, concatenating the array before my object and the one after
			]
		default:
			return state
	}	
}

export default propositions

//	NEW
//	REMOVED
//	LOCKED
//	EXPIRED
//	VOTING
//	ACCEPTED
//	DENIED