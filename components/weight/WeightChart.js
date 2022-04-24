import React from 'react'
import { Line } from 'react-chartjs-2'
import 'chartjs-adapter-moment'
import { Chart as ChartJS } from 'chart.js/auto'
//redux
import { useSelector } from 'react-redux'
import moment from 'moment'
export default function WeightChart() {
	//weight data
	const userWeightData = useSelector(state => state.weight.userWeightData)
	const userDestination = useSelector(state => state.weight.userDestination)
	console.log(userWeightData)
	const formatDate = dateString => {
		console.log(dateString)
		return moment(dateString, 'YYYY-MM-DD').toDate()
	}
	const data = {
		labels: userWeightData.map(data => formatDate(data.date)),
		datasets: [
			{
				label: 'WEIGHT',
				data: userWeightData.map(data => +data.weight),
				borderColor: '#00df9a',
				backdropColor: 'white',
			},
			{
				label: 'DESTINATION',
				data: [{ x: userDestination?.goalDate, y: userDestination?.weightGoal }],
				backgroundColor: 'red',
				backdropColor: 'white',

				borderColor: '#00df9a',
				color: 'red',
			},
		],
	}
	const options = {
		scales: {
			x: {
				type: 'time',
				// time: {
				// 	// Luxon format string
				// 	tooltipFormat: 'Y-M-D T',
				// },
			},
		},
	}
	return (
		<div>
			<Line data={data} options={options} />
		</div>
	)
}
