import { createSlice } from '@reduxjs/toolkit'

const initialNavbarState = {
	showNav: false,
}

export const navabarSlice = createSlice({
	name: 'navbar',
	initialState: initialNavbarState,
	reducers: {
		openNav(state) {
			state.showNav = true
		},
		closeNav(state) {
			state.showNav = false
		},
	},
})

export const navabarActions = navabarSlice.actions
