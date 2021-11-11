import {
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
	updateProfile,
} from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import "../firebase/firebase";
import axios from "axios";
import { baseUrl } from "../Utilities/Utils";

const AuthContext = React.createContext();

export function useAuth() {
	return useContext(AuthContext);
}

export function AuthProvider({ children }) {
	const [loading, setLoading] = useState(true);
	const [currentUser, setCurrentUser] = useState();
	const [isAdmin, setIsAdmin] = useState(false);

	// useEFfect
	useEffect(() => {
		const auth = getAuth();
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			setCurrentUser(user);
			setLoading(false);
		});

		return unsubscribe;
	}, []);

	// check if user is admin or not
	// useEffect(() => {
	// 	setLoading(true);
	// 	axios.get(`${baseUrl}/users/${currentUser?.email}`).then((res) => {
	// 		if (res.data.admin === true) {
	// 			setIsAdmin(true);
	// 		}
	// 		setLoading(false);
	// 	});
	// }, [currentUser?.email]);

	// signup
	async function signup(email, password, fullName) {
		const auth = getAuth();
		await createUserWithEmailAndPassword(auth, email, password);

		// update profile
		await updateProfile(auth.currentUser, {
			displayName: fullName,
		});

		const user = auth.currentUser;
		setCurrentUser({ ...user });

		// save user to DB
		saveUser(user.email, user.displayName, "POST");
	}

	// login
	async function login(email, password) {
		const auth = getAuth();
		return signInWithEmailAndPassword(auth, email, password);
	}

	// logout
	function logout() {
		const auth = getAuth();
		return signOut(auth);
	}

	// save user to database
	function saveUser(email, displayName, method) {
		console.log("save user to db");
		const newUser = { email, displayName };
		// axios({
		// 	method: method,
		// 	url: `${baseUrl}/users`,
		// 	data: newUser,
		// });
	}

	const value = { currentUser, signup, login, logout, isAdmin };

	return (
		<AuthContext.Provider value={value}>
			{!loading && children}
		</AuthContext.Provider>
	);
}
