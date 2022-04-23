import React from 'react'
//styles
import styles from '../../styles/alert/AlertListItem.module.css'
const AlertListItem = ({ type, message }) => {
	return (
		<li
			className={`${styles['alert']} ${type === 'danger' && styles['danger']} ${
				type === 'succes' && styles['succes']
			}`}>
			<p className='grap'>{message}</p>
			<div></div>
		</li>
	)
}

export default AlertListItem
