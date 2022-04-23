import { createSlice } from '@reduxjs/toolkit'

const initialAlertState = {
	alerts: [],
}

export const alertSlice = createSlice({
	name: 'alert',
	initialState: initialAlertState,
	reducers: {
		addAlert(state, action) {
			state.alerts.push({
				id: action.payload.id,
				message: action.payload.message,
				type: action.payload.type,
			})
		},
		deleteAlert(state, action) {
			state.alerts = state.alerts.filter(alert => alert.id !== action.payload.id)
		},
	},
})

export const alertActions = alertSlice.actions
