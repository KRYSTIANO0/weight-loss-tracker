import React from 'react'
//styles
import styles from '../../styles/ui-elements/Socials.module.css'
//icons
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const socials = [
	{ id: 'facebook', icon: <FaFacebook />, url: 'https://www.facebook.com/' },
	{ id: 'twitter', icon: <FaTwitter />, url: 'https://twitter.com/' },
	{ id: 'instagram', icon: <FaInstagram />, url: 'https://www.instagram.com/' },
]
const Socials = () => {
	return (
		<ul className={styles['social-list']}>
			{socials.map(({ id, url, icon }) => {
				return (
					<li className={styles['social-list-item']} key={id}>
						<a href={url} target='blank'>
							<div className='icon social'>{icon}</div>
						</a>
					</li>
				)
			})}
		</ul>
	)
}

export default Socials
