import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useState } from "react";

const SignUp = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSignUp = async (e) => {
		e.preventDefault();
		// authentication
		const auth = getAuth();
		try {
			const userCredential = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);
			const { user } = userCredential;
			console.log("Signup successful: ", user);
			setEmail("");
			setPassword("");
		} catch (err) {
			console.log("SignUp error: ", err.message);
		}
	};

	return (
		<div>
			<h2>
				<form onSubmit={handleSignUp}>
					<label htmlFor="email">Email:</label>
					<input
						type="email"
						name="email"
						value={email}
						onChange={(event) => setEmail(event.target.value)}
					/>
					<label htmlFor="password">Password</label>
					<input
						type="password"
						name="password"
						value={password}
						onChange={(event) => setPassword(event.target.value)}
					/>
					<button type="submit" onClick={handleSignUp}>
						signup
					</button>
				</form>
			</h2>
		</div>
	);
};

export default SignUp;
