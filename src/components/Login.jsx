import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = async (e) => {
		e.preventDefault();
		// authentication : don't forget to import
		const auth = getAuth();
		try {
			const userCredential = await signInWithEmailAndPassword(
				auth,
				email,
				password
			);
			const { user } = userCredential;
			console.log("Login successful: ", user);
			setEmail("");
			setPassword("");
		} catch (err) {
			console.log("Login error: ", err.message);
		}
	};

	return (
		<div>
			<h2>Login</h2>

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
