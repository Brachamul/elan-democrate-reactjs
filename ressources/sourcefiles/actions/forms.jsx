export const setFormFieldValue = (fieldName, fieldValue) => {
	return {
		type: 'SET_FORM_FIELD_VALUE',
		fieldName,
		fieldValue,
	}
}

export const setFormFieldError = (fieldName, errorText) => {
	return {
		type: 'SET_FORM_FIELD_ERROR',
		fieldName,
		errorText,
	}
}
