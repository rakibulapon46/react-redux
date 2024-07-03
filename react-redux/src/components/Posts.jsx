import { useDispatch, useSelector } from "react-redux"
import { fetchPosts } from "../features/posts/postsSlice";
import { useEffect } from "react";

export default function Posts() {
    const {posts, isLoading, isError, error} = useSelector((state) => state.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])

    let content;

    if (isLoading) {
        content = <h1>Loading posts....</h1>
    }

    if (!isLoading && isError) {
        content = <h1>{error}</h1>
    }

    if (!isLoading && !isError && posts.length === 0 ) {
        content = <h1>No posts found!</h1>
    }
    if (!isLoading && !isError && posts.length > 0 ) {
        content = <ol>{posts.map(post => <li key={post.id}>{post.title}</li>)}</ol>
    }

    return(
        <>
        {content}
        </>
    )
}
