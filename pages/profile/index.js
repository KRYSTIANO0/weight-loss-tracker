import React from 'react'
//styles
import styles from '../../styles/profile/ProfilePage.module.css'
//hooks
import { useAuth } from '../../hooks/useAuth'

const ProfilePage = () => {
	const { currentUser } = useAuth()
	let content
	if (currentUser?.user) {
		content = (
			<div className={styles['container']}>
				<p className={`grap ${styles['label']}`}>email</p> <p className='title'>{currentUser?.user.email}</p>
			</div>
		)
	} else content = <div className='title'>Yoy must log in to visit this page</div>
	return (
		<section className={styles['profile-section']}>
			<header className='header'>my profile</header>
			{content}
		</section>
	)
}
export default ProfilePage
