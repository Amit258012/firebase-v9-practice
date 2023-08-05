import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useState } from "react";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const auth = getAuth();

	const handleLogin = async (e) => {
		e.preventDefault();
		try {
			const userCredential = await signInWithEmailAndPassword(
				auth,
				email,
				password
			);
			const { user } = userCredential;
			console.log(user.email);
		} catch (error) {
			console.log(error.message);
		}
	};

	return (
		<div>
			<form>
				<label htmlFor="email">Email: </label>
				<input
					type="email"
					name="email"
					onChange={(e) => setEmail(e.target.value)}
				/>
				<label htmlFor="password">Password: </label>
				<input
					type="password"
					name="password"
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button onClick={handleLogin}>Login </button>
			</form>
		</div>
	);
};

export default Login;
