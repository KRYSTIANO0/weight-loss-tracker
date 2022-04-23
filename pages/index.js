import React, { useState } from 'react'
//styles
import styles from '../styles/home/HomePage.module.css'
//icons
import { MdFlashlightOn } from 'react-icons/md'
import { HiPresentationChartLine } from 'react-icons/hi'

const HomePage = () => {
	const [flashlightON, setflashlightON] = useState(false)
	const flashlightToggle = () => {
		setflashlightON(prev => !prev)
	}
	return (
		<section className={styles['home-section']}>
			<header className='header'>Welcome</header>
			<div className={styles['content']}>
				<p className={`grap ${styles['description']}`}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis mollitia nobis blanditiis hic dolores nam
					consectetur, repellendus rem vitae sequi! Assumenda atque earum sed corporis, cumque deleniti pariatur nemo
					neque dolor, deserunt voluptas repellendus cum sint? Vero odio hic laboriosam dicta error veniam dolor
					exercitationem.
				</p>
			</div>
			<div className={`${styles['circle']} ${flashlightON && styles['active']}`}>
				<div className={`${styles['lighton-content']}`}>
					<HiPresentationChartLine className={styles['daschboard-icon']} />
					<h1 className='title'>monitore you weight much easier</h1>
				</div>
			</div>
			<button onClick={flashlightToggle} className={`${styles['flashlight']} `}>
				<MdFlashlightOn />
			</button>
		</section>
	)
}

export default HomePage
