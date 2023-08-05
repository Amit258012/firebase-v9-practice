const Form = ({
	newTitle,
	setNewTitle,
	newAuthor,
	setNewAuthor,
	id,
	setId,
}) => {
	return (
		<div>
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
			</form>
		</div>
	);
};

export default Form;
