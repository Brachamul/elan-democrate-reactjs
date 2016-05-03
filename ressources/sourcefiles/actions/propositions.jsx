export const createProposition = (title, text) => {
	return {
		type: 'CREATE_PROPOSITION',
		title,
		text,
	}
}

export const updateProposition = (index, title, text, status) => {
	return {
		type: 'UPDATE_PROPOSITION',
		index, title, text, status,
	}
}

export const deleteProposition = (index) => {
	return {
		type: 'DELETE_PROPOSITION',
		index,
	}
}