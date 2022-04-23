//uuid
import { v4 } from 'uuid'
//redux
import { useDispatch } from 'react-redux'
import { alertActions } from '../store/slice/alertSlice'

const useAlert = () => {
	const dispatch = useDispatch()
	const showAlert = ({ message, type }) => {
		let id = v4()
		dispatch(alertActions.addAlert({ id, message, type }))
		setTimeout(() => {
			dispatch(alertActions.deleteAlert({ id }))
		}, 4000)
	}
	return { showAlert }
}

export default useAlert
