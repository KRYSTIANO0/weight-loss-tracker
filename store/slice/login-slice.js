import { createSlice } from '@reduxjs/toolkit'

const initialLoginState = {
	showLogin: false,
	showCreateAcc: false,
}

export const loginSlice = createSlice({
	name: 'login',
	initialState: initialLoginState,
	reducers: {
		openLogin(state) {
			state.showLogin = true
		},
		closeLogin(state) {
			state.showLogin = false
		},
		toggleCreateAcc(state) {
			state.showCreateAcc = !state.showCreateAcc
		},
		clsoeCreateAcc(state) {
			state.showCreateAcc = false
		},
	},
})

export const loginActions = loginSlice.actions
