import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './../features/users/usersSlice';

export default function Users() {
const {users, isLoading, isError, error} = useSelector((state) => state.users);
const dispatch = useDispatch();

useEffect(() => {
    dispatch(fetchUsers())
}, [dispatch])

let content;

if (isLoading) {
    content = <h1>Users Loading....</h1>
}

if (!isLoading && isError) {
    content = <h1>{error}</h1>
}

if (!isLoading && !isError && users.length === 0) {
    content = <h1>No users found</h1>
}

if (!isLoading && !isError && users.length > 0) {
    content = <ol>{users.map((user) => <li key={user.id}>{user.name}</li>)}</ol>
}


    return(
        <div className='users'>
            <h1>Users</h1>
            {content}
        </div>
    )
}
