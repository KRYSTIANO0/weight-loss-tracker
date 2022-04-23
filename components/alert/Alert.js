import React from 'react'
//styles
import styles from '../../styles/alert/Alert.module.css'
//components
import AlertListItem from './AlertListItem'
//redux
import { useSelector } from 'react-redux'

const Alert = () => {
	const alerts = useSelector(state => state.alert.alerts)

	return (
		<section className={styles['alerts']}>
			<ul>
				{alerts.map(alert => {
					return <AlertListItem key={alert.id} {...alert} />
				})}
			</ul>
		</section>
	)
}

export default Alert
