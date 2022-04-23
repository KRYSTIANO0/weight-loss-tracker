import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
//styles
//components
import Navbar from './navbar/Navbar'
import Alert from '../alert/Alert'
//redux
import { useDispatch } from 'react-redux'
import { authActions } from '../../store/slice/auth/firebaseAuth'
//hooks
import { useAuth } from '../../hooks/useAuth'

const Layout = props => {
	const dispatch = useDispatch()
	const { currentUser } = useAuth()
	if (currentUser?.user) {
		dispatch(authActions.login())
	} else {
		dispatch(authActions.logout())
	}
	const [isBrowser, setIsBrowser] = useState(false)

	useEffect(() => {
		setIsBrowser(true)
	}, [])
	return (
		<div>
			<Navbar />
			<main>{props.children}</main>
			{isBrowser && ReactDOM.createPortal(<Alert />, document.getElementById('modal-root'))}
		</div>
	)
}

export default Layout
