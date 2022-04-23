import React from 'react'
//components
import SingleWeightData from './SingleWeightData'
//redux
import { useSelector } from 'react-redux'
const WeightData = () => {
	const userWeightData = useSelector(state => state.weight.userWeightData)
	console.log(userWeightData)
	return (
		<ul>
			{userWeightData.map(data => {
				return <SingleWeightData {...data} />
			})}
		</ul>
	)
}

export default WeightData
