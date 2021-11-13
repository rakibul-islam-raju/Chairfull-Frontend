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
import Loading from "../shared/Loading/Loading";

const AuthContext = React.createContext();

export function useAuth() {
	return useContext(AuthContext);
}

export function AuthProvider({ children }) {
	const [loading, setLoading] = useState(true);
	const [currentUser, setCurrentUser] = useState();
	const [noUser, setNoUser] = useState();
	const [isAdmin, setIsAdmin] = useState();

	// useEFfect
	useEffect(() => {
		const auth = getAuth();
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			setCurrentUser(user);

			axios.get(`${baseUrl}/users/${user?.email}`).then((res) => {
				if (res.data.admin === true) {
					setIsAdmin(true);
				} else {
					setIsAdmin(false);
				}
			});
			setLoading(false);
		});

		return unsubscribe;
	}, []);

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
		await signInWithEmailAndPassword(auth, email, password);
		const user = auth.currentUser;
		setCurrentUser({ ...user });
	}

	// logout
	function logout() {
		const auth = getAuth();
		return signOut(auth);
	}

	// save user to database
	function saveUser(email, displayName, method) {
		const newUser = { email, displayName };
		axios({
			method: method,
			url: `${baseUrl}/users`,
			data: newUser,
		});
	}

	const value = { currentUser, signup, login, logout, isAdmin };

	return (
		<AuthContext.Provider value={value}>
			{loading ? <Loading /> : children}
		</AuthContext.Provider>
	);
}
