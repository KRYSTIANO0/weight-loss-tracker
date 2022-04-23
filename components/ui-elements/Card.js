import React from 'react'
//styles
import styles from '../../styles/ui-elements/Card.module.css'
const Card = props => {
	return <div className={styles['card']}>{props.children}</div>
}

export default Card
