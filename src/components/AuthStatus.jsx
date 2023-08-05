import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import Login from "./Login";
import Logout from "./Logout";

const AuthStatus = () => {
	const [user, setUser] = useState(null);
	useEffect(() => {
		const auth = getAuth();
		onAuthStateChanged(auth, (user) => {
			setUser(user);
		});
	}, []);
	return (
		<div>
			{user ? (
				<div>
					<h1>Welcome, {user.email}!</h1>
					<Logout />
				</div>
			) : (
				<div>
					<h1>Login</h1>
					<Login />
				</div>
			)}
		</div>
	);
};

export default AuthStatus;
