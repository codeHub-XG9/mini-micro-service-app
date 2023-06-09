const CommentList = ({ comments }) => {
	const renderedComments = comments.map((comment) => {
		return (
			<li className='list-group-item' key={comment.id}>
				{comment.content}
			</li>
		);
	});

	return <ul className='list-group'>{renderedComments}</ul>;
};

export default CommentList;
