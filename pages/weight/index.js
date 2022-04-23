import React from 'react'
//styles
import styles from '../../styles/weight/WeightPage.module.css'
//components
import WeightForm from '../../components/forms/addWeight/WeightForm'
import WeightChart from '../../components/weight/WeightChart'
import WeightData from '../../components/weight/WeightData'
import DestinationForm from '../../components/forms/destinationForm/DestinationForm'
//hooks
import { useAuth } from '../../hooks/useAuth'
//redux
import { useDispatch } from 'react-redux'
import { weightActions } from '../../store/slice/weightSlice'
import { getDestination } from '../../store/slice/weightSlice'

const WeightPage = ({ weightData }) => {
	const { currentUser } = useAuth()
	const dispatch = useDispatch()
	let content

	if (currentUser?.user) {
		const uid = currentUser?.user.uid
		//save data on slice
		dispatch(weightActions.getWeightData({ weightData, uid }))
		dispatch(getDestination(uid))

		content = (
			<>
				<div className={styles['container']}>
					<div className={styles['content']}>
						<WeightChart />
					</div>
					<div className={styles['forms-box']}>
						<div className={styles['box']}>
							<h1 className='title'>add your weight </h1>
							<WeightForm />
						</div>
						<div className={styles['box']}>
							<h1 className='title'>add destination</h1>
							<DestinationForm />
						</div>
					</div>
				</div>
				<div className={styles['box']}>
					<h1 className='title'>data</h1>
					<WeightData />
				</div>
			</>
		)
	} else content = <div className='title'>You must log in to visit this page</div>
	return (
		<section className={styles['weight-section']}>
			<header className='header'>My Weight</header>
			{content}
		</section>
	)
}
export const getServerSideProps = async () => {
	//fetch weight data
	const resp = await fetch('https://weight-tracker-95d64-default-rtdb.firebaseio.com/weight.json')
	const data = await resp.json()
	const weightData = []
	for (const key in data) {
		weightData.push({ id: key, weight: data[key].weight, date: data[key].date, uid: data[key].uid })
	}

	return {
		props: { weightData },
	}
}

export default WeightPage
