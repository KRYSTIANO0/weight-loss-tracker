import React from 'react'
//styles
import styles from '../../../styles/forms/FormButtons.module.css'
//redux
import { useSelector } from 'react-redux'
//components
import Loading from '../../ui-elements/Loading'
const FormButtons = ({ formIsValid, isLoading }) => {
	const showCreateAcc = useSelector(state => state.login.showCreateAcc)
	return (
		<button
			type='submit'
			disabled={!formIsValid}
			className={`${styles['form-button']} ${formIsValid ? styles['active'] : styles['disactive']}`}>
			<p className='title'>{isLoading ? <Loading /> : showCreateAcc ? 'create' : 'log in'}</p>
		</button>
	)
}

export default FormButtons
