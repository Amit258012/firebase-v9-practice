import "./App.css";
import AddBook from "./components/AddBook";
import DeleteBook from "./components/DeleteBook";
import Practice from "./fireStore/Practice";
function App() {
	return (
		<>
			<h1>Firebase practice</h1>
			<Practice />
			<AddBook />
			<DeleteBook />
		</>
	);
}

export default App;
