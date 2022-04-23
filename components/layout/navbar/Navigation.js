import React from 'react'
//styles
import styles from '../../../styles/layout/navbar/Navigation.module.css'
//components
import NavList from './NavList'
import Socials from '../../ui-elements/Socials'
//icons
import { FaTimes } from 'react-icons/fa'
//redux
import { useDispatch } from 'react-redux'
import { navabarActions } from '../../../store/slice/navbar-slice'

const Navigation = () => {
	const dispatch = useDispatch()
	const closeNav = () => {
		dispatch(navabarActions.closeNav())
	}
	return (
		<nav className={styles['main-nav']}>
			<button onClick={closeNav} className={`icon ${styles['close-btn']}`}>
				<FaTimes />
			</button>
			<NavList />
			<div className={styles['socials']}>
				<Socials />
			</div>
		</nav>
	)
}

export default Navigation
