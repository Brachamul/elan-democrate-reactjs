function forms( state={ fields: {}, fieldErrors: {} }, action) {
	switch (action.type) {
		case 'SET_FORM_FIELD_VALUE':
			return { ...state, fields: fields(state.fields, action) }
		case 'SET_FORM_FIELD_ERROR':
			return { ...state, fieldErrors: fieldErrors(state.fieldErrors, action) }
		default : 
			return state
	}
}

function fields(state={}, action) {
	switch (action.type) {
		case 'SET_FORM_FIELD_VALUE':
			return { ...state, [action.fieldName]: action.fieldValue }
	}
}

function fieldErrors(state={}, action) {
	switch (action.type) {
		case 'SET_FORM_FIELD_ERROR':
			return { ...state, [action.fieldName]: action.errorText }
	}
}

export default forms