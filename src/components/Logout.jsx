import { getAuth, signOut } from "firebase/auth";

const Logout = () => {
	const handleLogout = async (e) => {
		e.preventDefault();
		const auth = getAuth();
		try {
			await signOut(auth);
			console.log("User signed out successfully");
		} catch (err) {
			console.log(err.message);
		}
	};

	return (
		<div>
			<button onClick={handleLogout}>Logout</button>
		</div>
	);
};

export default Logout;
