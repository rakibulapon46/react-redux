import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments } from "./../features/comment/commentsSlice";

export default function Comments() {
  const { comments, isLoading, isError, error } = useSelector(
    (state) => state.comments
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchComments());
  }, [dispatch]);

  let content;

  if (isLoading) {
    content = <h1>Loading comments....</h1>
  }

  if (!isLoading  && isError) {
    content = <h1>{error}</h1>
  }

  if (!isLoading  && !isError && comments.length === 0) {
    content = <h1>No data found</h1>
  }

  if (!isLoading  && !isError && comments.length > 0) {
    content = <ol>{comments.map((comment) => <li key={comment.id}>{comment.email}</li>)}</ol>
  }

  return <div className="comments">
    <h1>Comment</h1>
    {content}
  </div>;
}
