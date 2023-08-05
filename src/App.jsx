import "./App.css";
import AddBook from "./components/AddBook";
import DeleteBook from "./components/DeleteBook";
import SignUp from "./components/SignUp";
import Practice from "./fireStore/Practice";
function App() {
	return (
		<>
			<h1>Firebase practice</h1>
			<h2>Sign up</h2>
			<SignUp />
			{/* <Practice />
			<AddBook />
			<DeleteBook /> */}
		</>
	);
}

export default App;
