import { configureStore } from '@reduxjs/toolkit'
//slices
import { loginSlice } from './slice/login-slice'
import { navabarSlice } from './slice/navbar-slice'
import { authSlice } from './slice/auth/firebaseAuth'
import { alertSlice } from './slice/alertSlice'
import { weightSlice } from './slice/weightSlice'

const store = configureStore({
	reducer: {
		login: loginSlice.reducer,
		navbar: navabarSlice.reducer,
		auth: authSlice.reducer,
		alert: alertSlice.reducer,
		weight: weightSlice.reducer,
	},
})

export default store
