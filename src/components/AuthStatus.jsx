import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

// Auth state Status
export const checkAuthState = () => {
	const [user, setUser] = useState(null);
	useEffect(() => {
		const auth = getAuth();
		onAuthStateChanged(auth, (user) => {
			setUser(user);
		});
	}, []);
	return user;
	// if user is logged out then the user value will be null!
};
// call:-  const user = checkAuthState();
