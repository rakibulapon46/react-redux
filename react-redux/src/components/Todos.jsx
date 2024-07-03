import { useDispatch, useSelector } from "react-redux"
import { useEffect } from 'react';
import { fetchTodos } from "../features/todos/todosSlice";


export default function Todos() {
    const {todos, isLoading, isError, error} = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTodos())
    }, [dispatch]);

    let content;

    if (isLoading) {
        content = <h1>Loading todos....</h1>;
    }

    if (!isLoading && isError) {
        content = <h1>{error}</h1>
    }

    if (!isLoading && !isError && todos.length === 0) {
        content = <h1>No todos found!</h1>
    }

    if (!isLoading && !isError && todos.length > 0) {
        content = <ol>{todos.map((todo)=> <li key={todo.id}>{todo.title}</li>)}</ol>
    }

    return(
        <div className="todos">
            <h1>Todos</h1>
            {content}
        </div>
    )
}
