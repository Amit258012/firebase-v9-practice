import {
	collection,
	getDocs,
	onSnapshot,
	orderBy,
	query,
	where,
} from "firebase/firestore";
import { db } from "./fireStoreConfig";
import { useEffect, useState } from "react";

const Practice = () => {
	const [books, setBooks] = useState([]);
	//  collection ref:
	const colRef = collection(db, "books");

	// get collection data
	//* use/type => fbgetdoc

	// useEffect(() => {
	// 	const getBooks = async () => {
	// 		const data = await getDocs(colRef);
	// 		setBooks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
	// 	};
	// 	getBooks();
	// }, []);

	// get realtime collection data
	//* use/type => fbgetdata
	// useEffect(() => {
	// 	const getBooks = () => {
	// 		onSnapshot(colRef, (snapshot) => {
	// 			setBooks(
	// 				snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
	// 			);
	// 		});
	// 	};
	// 	getBooks();
	// }, []);

	// get specific data using query
	//* use/type => fbquery
	// const customQuery = query(colRef, where("fieldName", "condition operator", "fieldValue"));
	// ! it is case sensitive
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
