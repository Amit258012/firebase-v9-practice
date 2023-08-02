import { collection, getDocs } from "firebase/firestore";
import { db } from "./fireStoreConfig";
import { useEffect } from "react";

const Practice = () => {
	//  collection ref:
	const colRef = collection(db, "books");

	// get collection data
	useEffect(() => {
		const getBooks = async () => {
			const data = await getDocs(colRef);
			console.log(
				"data:",
				// data.docs[0].data()
				data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
			);
		};
		getBooks();
	}, []);
	return <div>Here</div>;
};

export default Practice;
