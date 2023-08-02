import { collection, getDocs } from "firebase/firestore";
import { db } from "./fireStoreConfig";
import { useEffect, useState } from "react";

const Practice = () => {
	const [books, setBooks] = useState([]);
	//  collection ref:
	const colRef = collection(db, "books");

	// get collection data
	useEffect(() => {
		const getBooks = async () => {
			const data = await getDocs(colRef);
			setBooks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
		};
		getBooks();
	}, []);

	return (
		<div>
			<h2>Books</h2>
			{books && console.log(books)}
			{books?.map((book) => {
				return (
					<li key={book.id}>
						{book.title} : {book.author}
					</li>
				);
			})}
		</div>
	);
};

export default Practice;
