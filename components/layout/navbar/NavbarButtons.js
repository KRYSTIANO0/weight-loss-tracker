import React from 'react'
//styles
import styles from '../../../styles/layout/navbar/Navbar.Buttons.module.css'
//icons
import { FaBars } from 'react-icons/fa'
//redux
import { useSelector, useDispatch } from 'react-redux'
import { navabarActions } from '../../../store/slice/navbar-slice'
import { loginActions } from '../../../store/slice/login-slice'
const NavbarButtons = () => {
	const isLogged = useSelector(state => state.auth.isLogged)

	const dispatch = useDispatch()
	const openMenu = () => {
		dispatch(navabarActions.openNav())
	}
	const openLogin = () => {
		dispatch(loginActions.openLogin())
	}
	return (
		<div className={styles['buttons']}>
			{isLogged ? (
				<button onClick={openMenu} className={`icon ${styles['menu-btn']}`}>
					<FaBars />
				</button>
			) : (
				<button onClick={openLogin} className={`icon ${styles['login-btn']}`}>
					<div className={`title ${styles['login-text']}`}>Log in</div>
				</button>
			)}
		</div>
	)
}

export default NavbarButtons
