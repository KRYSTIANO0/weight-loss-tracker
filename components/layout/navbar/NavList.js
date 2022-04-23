import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
//styles
import styles from '../../../styles/layout/navbar/NavList.module.css'
//redux
import { useDispatch } from 'react-redux'
import { authActions } from '../../../store/slice/auth/firebaseAuth'
import { navabarActions } from '../../../store/slice/navbar-slice'
//hooks
import { useAuth } from '../../../hooks/useAuth'
import useAlert from '../../../hooks/useAlert'
const nav = [
	{ id: '5be5199e-b89c-11ec-b909-0242ac120002', title: 'home', url: '/' },
	{ id: '5be51fd4-b89c-11ec-b909-0242ac120002', title: 'my weight', url: '/weight' },
	{ id: '5be521c8-b89c-11ec-b909-0242ac120002', title: 'profile', url: '/profile' },
]

const NavList = () => {
	const { logout } = useAuth()
	const { showAlert } = useAlert()
	const dispatch = useDispatch()
	const router = useRouter()

	const logOutHandler = async () => {
		try {
			await logout()
			// dispatch(authActions.logout())
			dispatch(navabarActions.closeNav())
			router.push('/')
		} catch (error) {
			showAlert((message = error.messagfe), (type = 'danger'))
		}
	}
	return (
		<>
			<ul className={styles['nav-list']}>
				{nav.map(({ id, title, url }) => {
					return (
						<li onClick={() => dispatch(navabarActions.closeNav())} className={styles['nav-list-item']} key={id}>
							<Link href={url}>
								<p className='title'>{title}</p>
							</Link>
						</li>
					)
				})}
			</ul>
			<button onClick={logOutHandler} className={`title ${styles['nav-list-item']}`}>
				<p className={`title ${styles['log-out-btn']}`}>log out</p>
			</button>
		</>
	)
}

export default NavList
