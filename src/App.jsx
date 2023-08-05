import "./App.css";
import AddBook from "./components/AddBook";
import { checkAuthState } from "./components/AuthStatus";
import DeleteBook from "./components/DeleteBook";
import Login from "./components/Login";
import Logout from "./components/Logout";
import SignUp from "./components/SignUp";
import Practice from "./fireStore/Practice";
function App() {
	const user = checkAuthState();
	return (
		<>
			<h1>Firebase practice</h1>
			<h2>SignUp/Login to add, delete the data</h2>
			<Practice />

			{user ? (
				<div>
					<h1>Welcome, {user.email}!</h1>
					<AddBook />
					<DeleteBook />
					<Logout />
				</div>
			) : (
				<div>
					<SignUp />
					<Login />
				</div>
			)}
		</>
	);
}

export default App;
