import React from 'react'
//styles
import styles from '../../styles/ui-elements/Laoding.module.css'
const Loading = () => {
	return (
		<span className={styles['spinner']}>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
		</span>
	)
}

export default Loading
