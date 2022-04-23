import React from 'react'
//styles
import styles from '../../../styles/layout/navbar/Login.module.css'
//components
import Card from '../../ui-elements/Card'
import LoginCreateForm from '../../forms/login-create/LoginCreateForm'
//icons
import { FaTimes } from 'react-icons/fa'
//redux
import { useDispatch, useSelector } from 'react-redux'
import { loginActions } from '../../../store/slice/login-slice'

const Login = () => {
	const showCreateAcc = useSelector(state => state.login.showCreateAcc)

	const dispatch = useDispatch()

	const closeLogin = () => {
		dispatch(loginActions.closeLogin())
		dispatch(loginActions.clsoeCreateAcc())
	}
	return (
		<Card>
			<div className={styles['login-container']}>
				<header className={styles['login-header']}>
					<p className='title'>{showCreateAcc ? 'Create new account' : 'Login'}</p>
					<button onClick={closeLogin}>
						<FaTimes className='icon' />
					</button>
				</header>
				<LoginCreateForm />
			</div>
		</Card>
	)
}

export default Login
