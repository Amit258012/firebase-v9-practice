import { useState } from "react";
import { db } from "../fireStore/fireStoreConfig";
import { deleteDoc, doc } from "firebase/firestore";

const DeleteBook = () => {
	const [bookId, setBookId] = useState("");
	// const colRef = collection(db, "books");

	const deleteBookById = async (e) => {
		e.preventDefault();
		const docRef = doc(db, "books", bookId);
		await deleteDoc(docRef);
		alert("Book deleted successfully");
		setBookId("");
	};

	return (
		<div>
			<h2>Delete from Firestore</h2>
			<form>
				<label htmlFor="id">Document Id: </label>
				<input
					type="text"
					name="id"
					value={bookId}
					onChange={(e) => setBookId(e.target.value)}
					required
				/>
				<button onClick={deleteBookById}>Delete a book</button>
			</form>
		</div>
	);
};

export default DeleteBook;
