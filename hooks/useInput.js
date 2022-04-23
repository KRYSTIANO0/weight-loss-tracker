import React, { useState } from 'react'
//styles
import styles from '../styles/forms/Input.module.css'
const useInput = validation => {
	const [value, setValue] = useState('')
	const [isTouched, setIsTouched] = useState(false)

	const valueIsValid = isTouched && validation(value)
	const valueIsInvalid = isTouched && !valueIsValid

	const onChangeHandler = e => {
		setValue(e.target.value)
	}
	const onBlurHandler = () => {
		setIsTouched(true)
	}

	const valueClasses = `${styles['input-box']} ${valueIsInvalid && styles['invalid']} ${
		valueIsValid && styles['valid']
	}`
	return { value, onChangeHandler, onBlurHandler, valueClasses, valueIsValid, valueIsInvalid, setValue }
}

export default useInput
