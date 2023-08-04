import { useState } from "react";
import { db } from "../fireStore/fireStoreConfig";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const AddBook = () => {
	const [newTitle, setNewTitle] = useState("");
	const [newAuthor, setNewAuthor] = useState("");
	const colRef = collection(db, "books");

	const addBook = async (e) => {
		e.preventDefault();
		await addDoc(colRef, {
			title: newTitle.trim(),
			author: newAuthor.trim(),
			createdAt: serverTimestamp(),
		});
		alert("Successfully added the Book!");
		setNewTitle("");
		setNewAuthor("");
	};

	return (
		<div>
			<h2>Add to Firestore</h2>
			<form>
				<label htmlFor="title">Title: </label>
				<input
					type="text"
					name="title"
					value={newTitle}
					required
					onChange={(e) => setNewTitle(e.target.value)}
				/>
				<label htmlFor="author">Author: </label>
				<input
					type="text"
					name="author"
					value={newAuthor}
					required
					onChange={(e) => setNewAuthor(e.target.value)}
				/>
				<button onClick={addBook}>Add new book</button>
			</form>
		</div>
	);
};

export default AddBook;
