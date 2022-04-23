import React from 'react'
//components
import NavbarButtons from './NavbarButtons'
import Navigation from './Navigation'
import Modal from '../../ui-elements/Modal'
import Login from './Login'
//styles
import styles from '../../../styles/layout/navbar/Navbar.module.css'
//redux
import { useSelector } from 'react-redux'

const Navbar = () => {
	const showNav = useSelector(state => state.navbar.showNav)
	const showLogin = useSelector(state => state.login.showLogin)

	return (
		<>
			<div className={styles['main-navbar']}>
				<div id='logo'>weight</div>
				<NavbarButtons />
			</div>
			{showNav && (
				<Modal>
					<Navigation />
				</Modal>
			)}
			{showLogin && (
				<Modal>
					<Login />
				</Modal>
			)}
		</>
	)
}

export default Navbar
