export const newAlert = (level, text) => {
	return {
		type: 'NEW_ALERT',
		level,  // success, info, warning or danger
		text,
	}
}

export const dismissAlert = (index) => {
	return {
		type: 'DISMISS_ALERT',
		index,
	}
}

export const clearAllAlerts = () => {
	return {
		type: 'CLEAR_ALL_ALERTS'
	}
}