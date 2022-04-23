import React from 'react'
//styles
import styles from '../../styles/weight/SingleWeightData.module.css'
//redux
import { useDispatch } from 'react-redux'
import { deleteWeight } from '../../store/slice/weightSlice'
//hooks
import useAlert from '../../hooks/useAlert'
const SingleWeightData = ({ weight, date, id }) => {
	const dispatch = useDispatch()
	const { showAlert } = useAlert()
	const onDeleteWeight = () => {
		try {
			dispatch(deleteWeight(id))
			showAlert({ message: 'Weight deleted', type: 'succes' })
		} catch (error) {
			showAlert({ message: error.message, type: 'danger' })
		}
	}
	return (
		<li className={styles['weight-data-item']}>
			<div className={`grap ${styles['box']}`}>{date}</div>
			<div className={`grap ${styles['box']}`}>{weight}</div>
			<button onClick={onDeleteWeight} className={`grap ${styles['box']} ${styles['delete-btn']}`}>
				DELETE
			</button>
		</li>
	)
}

export default SingleWeightData
