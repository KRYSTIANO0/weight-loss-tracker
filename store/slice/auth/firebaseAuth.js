import { createSlice } from '@reduxjs/toolkit'

const initialAuthSate = {
	isLogged: false,
}
export const authSlice = createSlice({
	name: 'auth',
	initialState: initialAuthSate,
	reducers: {
		logout(state) {
			state.isLogged = false
		},
		login(state) {
			state.isLogged = true
		},
	},
})

export const authActions = authSlice.actions
