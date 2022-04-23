import React, { useState } from 'react'
import { useRouter } from 'next/router'
//styles
import styles from '../../../styles/forms/Input.module.css'
//components
import FormButtons from '../form-buttons/FormButtons'
//redux
import { useDispatch, useSelector } from 'react-redux'
import { loginActions } from '../../../store/slice/login-slice'
//hooks
import useInput from '../../../hooks/useInput'
import useAlert from '../../../hooks/useAlert'
import { useAuth } from '../../../hooks/useAuth'

const LoginCreateForm = () => {
	const [isLoading, setIsLoadnig] = useState(false)
	const { showAlert } = useAlert()
	const { createAccount, login } = useAuth()
	const showCreateAcc = useSelector(state => state.login.showCreateAcc)
	const dispatch = useDispatch()
	const router = useRouter()

	//validations
	const emptyValidation = data => {
		return data.trim() !== ''
	}
	const emailValidation = data => {
		return data.match(
			/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		)
	}
	//inputs
	const {
		value: email,
		onChangeHandler: onEmailChangeHandler,
		onBlurHandler: onEmailBlurHandler,
		valueClasses: emailCalsses,
		valueIsValid: emailIsValid,
		valueIsInvalid: emailIsInvali,
	} = useInput(emailValidation)
	const {
		value: password,
		onChangeHandler: onPasswordChangeHandler,
		onBlurHandler: onPasswordBlurHandler,
		valueClasses: passwordCalsses,
		valueIsValid: passwordIsValid,
		valueIsInvalid: passwordIsInvalid,
	} = useInput(emptyValidation)
	const {
		value: ConfirmPassword,
		onChangeHandler: onConfirmPasswordChangeHandler,
		onBlurHandler: onConfirmPasswordBlurHandler,
		valueClasses: ConfirmPasswordCalsses,
		valueIsValid: ConfirmPasswordIsValid,
		valueIsInvalid: ConfirmPasswordIsInvalid,
	} = useInput(emptyValidation)

	const formIsValid = showCreateAcc
		? emailIsValid && passwordIsValid && ConfirmPasswordIsValid
		: emailIsValid && passwordIsValid

	const toggleCreateAcc = () => {
		dispatch(loginActions.toggleCreateAcc())
	}
	const onSubmitHandler = async e => {
		e.preventDefault()

		setIsLoadnig(true)
		try {
			if (showCreateAcc && password === ConfirmPassword) {
				await createAccount(email, password)
				showAlert({ message: 'Welcome in WEIGHT.', type: 'succes' })
			} else {
				await login(email, password)
			}
			dispatch(loginActions.closeLogin())
			router.push('/profile')
		} catch (error) {
			if (error.code === 'auth/email-already-in-use') {
				showAlert({ message: 'Email already in use.', type: 'danger' })
			} else {
				showAlert({ message: error.message, type: 'danger' })
			}
		}
		setIsLoadnig(false)
	}
	return (
		<form onSubmit={onSubmitHandler}>
			<div className={emailCalsses}>
				<input
					className={`grap ${styles['single-input']}`}
					placeholder='E-mail'
					type='email'
					value={email}
					onChange={onEmailChangeHandler}
					onBlur={onEmailBlurHandler}
				/>
			</div>
			<div className={passwordCalsses}>
				<input
					className={`grap ${styles['single-input']}`}
					placeholder='Password'
					type='password'
					value={password}
					onChange={onPasswordChangeHandler}
					onBlur={onPasswordBlurHandler}
				/>
			</div>
			{showCreateAcc && (
				<div className={ConfirmPasswordCalsses}>
					<input
						className={`grap ${styles['single-input']}`}
						placeholder='Confirm password'
						type='password'
						value={ConfirmPassword}
						onChange={onConfirmPasswordChangeHandler}
						onBlur={onConfirmPasswordBlurHandler}
					/>
				</div>
			)}
			<div className={`grap ${styles['policy-info']}`}>
				By {showCreateAcc ? 'registration' : 'logging in'}, you accept the following Weight documents: Privacy Policy
				and Terms of Use .
			</div>
			<div className={styles['actions']}>
				<FormButtons formIsValid={formIsValid} isLoading={isLoading} />
				<p className='grap'>
					{showCreateAcc ? 'Have already account ?' : 'Not a member yet?'}{' '}
					<button onClick={toggleCreateAcc} type='button' className={`grap ${styles['join-us']}`}>
						{showCreateAcc ? 'log in' : 'join us'}
					</button>
				</p>
			</div>
		</form>
	)
}

export default LoginCreateForm
