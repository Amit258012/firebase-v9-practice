import { useState } from "react";
import { db } from "../fireStore/fireStoreConfig";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import Form from "./Form";

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
			<Form
				newAuthor={newAuthor}
				newTitle={newTitle}
				setNewAuthor={setNewAuthor}
				setNewTitle={setNewTitle}
			/>
			<button onClick={addBook}>Add book</button>
		</div>
	);
};

export default AddBook;
