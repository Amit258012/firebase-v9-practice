import {
	collection,
	getDocs,
	onSnapshot,
	orderBy,
	query,
	where,
	doc,
	updateDoc,
} from "firebase/firestore";
import { db } from "./fireStoreConfig";
import { useEffect, useState } from "react";
import Form from "../components/Form";

const Practice = () => {
	const [books, setBooks] = useState([]);
	const [updateFormShow, setUpdateFormShow] = useState(false);
	const [newTitle, setNewTitle] = useState("");
	const [newAuthor, setNewAuthor] = useState("");
	const [id, setId] = useState("");
	//  collection ref:
	const colRef = collection(db, "books");

	//Firebase update data
	const updateData = async (id, title, author) => {
		setId(id);
		const bookData = doc(db, "books", id);
		const newFields = {
			title: title,
			author: author,
		};
		await updateDoc(bookData, newFields);
		alert("Updated");
		setNewAuthor("");
		setNewTitle("");
		setUpdateFormShow(false);
	};
	console.log(books);

	const customQuery = query(colRef, orderBy("createdAt"));
	useEffect(() => {
		const getBooks = () => {
			onSnapshot(customQuery, (snapshot) => {
				setBooks(
					snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
				);
			});
		};
		getBooks();
	}, []);

	const handleEdit = (id) => {
		setUpdateFormShow(true);
		setId(id);
	};

	return (
		<div>
			<h2>Books</h2>
			{books?.map((book) => {
				return (
					<li key={book.id}>
						{book.title} : {book.author}
						<button onClick={() => handleEdit(book.id)}>
							Edit Data
						</button>
					</li>
				);
			})}
			{updateFormShow && (
				<>
					<Form
						newAuthor={newAuthor}
						newTitle={newTitle}
						setNewAuthor={setNewAuthor}
						setNewTitle={setNewTitle}
					/>
					<button onClick={() => updateData(id, newTitle, newAuthor)}>
						Update Data
					</button>
				</>
			)}
		</div>
	);
};

export default Practice;
