import React from 'react'
//styles
import styles from '../../../styles/weight/WeightForm.module.css'
//redux
import { useDispatch } from 'react-redux'
import { addDestination } from '../../../store/slice/weightSlice'
//hooks
import useInput from '../../../hooks/useInput'
import useAlert from '../../../hooks/useAlert'
import { useAuth } from '../../../hooks/useAuth'
const DestinationForm = () => {
	const dispatch = useDispatch()
	//user
	const { currentUser } = useAuth()
	const uid = currentUser?.user.uid
	//alert
	const { showAlert } = useAlert()
	//inputs
	const { value: weightGoal, onChangeHandler: onWeightGoalChangeHandler, setValue: setWeight } = useInput()
	const { value: goalDate, onChangeHandler: onGoalDateChangeHandler, setValue: setGoalDate } = useInput()
	//onSubmit
	const onSubmitDestination = e => {
		e.preventDefault()
		const data = { uid, weightGoal, goalDate }
		if (weightGoal.length === 0 || goalDate.length === 0) {
			showAlert({ message: 'You must enter weight and date.', type: 'danger' })
		} else {
			dispatch(addDestination(data))
			setWeight('')
			setGoalDate('')
		}
	}
	return (
		<form onSubmit={onSubmitDestination} className={styles['weight-form']}>
			<input
				className={`title ${styles['input']}`}
				type='number'
				min={30}
				max={320}
				placeholder='Add your destination weight'
				value={weightGoal}
				onChange={onWeightGoalChangeHandler}
			/>
			<input
				className={`title ${styles['input']}`}
				type='date'
				placeholder=''
				value={goalDate}
				onChange={onGoalDateChangeHandler}
			/>
			<button className={`title ${styles['weight-add-btn']}`} type='submit'>
				add destination
			</button>
		</form>
	)
}

export default DestinationForm
