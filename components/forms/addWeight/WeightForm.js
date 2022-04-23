import React from 'react'
//styles
import styles from '../../../styles/weight/WeightForm.module.css'
//hooks
import useInput from '../../../hooks/useInput'
import useAlert from '../../../hooks/useAlert'
import { useAuth } from '../../../hooks/useAuth'
//redux
import { addWeight } from '../../../store/slice/weightSlice'
import { useDispatch } from 'react-redux'
const WeightForm = () => {
	//current user
	const { currentUser } = useAuth()
	//dispatch
	const dispatch = useDispatch()
	const { showAlert } = useAlert()
	//inputs
	const { value: weight, onChangeHandler: onWeightChangeHandler, setValue: setWeight } = useInput()
	const onSubmitWeight = e => {
		e.preventDefault()
		let today = new Date()
		let date0 = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
		let time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()
		let date = date0 + ' ' + time
		const data = {
			uid: currentUser?.user.uid,
			weight,
			date,
		}
		if (weight.length === 0) {
			showAlert({ message: 'You must enter weight.', type: 'danger' })
		} else {
			dispatch(addWeight(data))
			setWeight('')
			showAlert({ message: 'Weight added.', type: 'succes' })
		}
	}
	return (
		<form onSubmit={onSubmitWeight} className={styles['weight-form']}>
			<input
				className={`title ${styles['input']}`}
				type='number'
				min={30}
				max={320}
				placeholder='Add you current weight in kg [max: 320]'
				value={weight}
				onChange={onWeightChangeHandler}
			/>
			<button className={`title ${styles['weight-add-btn']}`} type='submit'>
				add
			</button>
		</form>
	)
}

export default WeightForm
