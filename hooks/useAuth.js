import { useState, useEffect } from 'react'
import app from '../config/firebase/firebaseConfig'
import {
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
} from 'firebase/auth'

export function useAuth() {
	const auth = getAuth(app)
	const [currentUser, setCurrentUser] = useState()

	useEffect(() => {
		const unsub = onAuthStateChanged(auth, user => setCurrentUser({ user }))
		return unsub
	}, [])

	const createAccount = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password)
	}
	const login = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password)
	}
	const logout = () => {
		return signOut(auth)
	}
	return { currentUser, createAccount, login, logout }
}
