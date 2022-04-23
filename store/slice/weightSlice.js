import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialWeightState = {
	weight: null,
	userWeightData: null,
	userDestination: null,
}

export const addWeight = createAsyncThunk('weight/addWeight', async data => {
	try {
		await fetch('https://weight-tracker-95d64-default-rtdb.firebaseio.com/weight.json', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data),
		})
		return { data }
	} catch (error) {
		console.log(error.message)
	}
})
export const deleteWeight = createAsyncThunk('weight/deleteWeight', async id => {
	await fetch(`https://weight-tracker-95d64-default-rtdb.firebaseio.com/weight/${id}.json`, {
		method: 'DELETE',
	})
	return { id }
})
export const addDestination = createAsyncThunk('weight/addDestination', async data => {
	try {
		await fetch(`https://weight-tracker-95d64-default-rtdb.firebaseio.com/destination/${data.uid}.json`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data),
		})
		return { data }
	} catch (error) {
		console.log(error.message)
	}
})
export const getDestination = createAsyncThunk('weight/getDestination', async uid => {
	try {
		const resp = await fetch(`https://weight-tracker-95d64-default-rtdb.firebaseio.com/destination/${uid}.json`, {})
		const data = await resp.json()

		return { data }
	} catch (error) {
		console.log(error.message)
	}
})
export const weightSlice = createSlice({
	name: 'weight',
	initialState: initialWeightState,
	reducers: {
		getWeightData(state, action) {
			state.weight = action.payload.weightData
			state.userWeightData = action.payload.weightData.filter(data => data.uid === action.payload.uid)
		},
	},
	extraReducers: {
		[addWeight.fulfilled]: (state, action) => {
			state.userWeightData.push(action.payload.data)
		},
		[addDestination.fulfilled]: (state, action) => {
			state.userDestination = action.payload.data
		},
		[getDestination.fulfilled]: (state, action) => {
			state.userDestination = action.payload.data
		},
		[deleteWeight.fulfilled]: (state, action) => {
			state.userWeightData = state.userWeightData.filter(data => data.id !== action.payload.id)
		},
	},
})

export const weightActions = weightSlice.actions
