import { configureStore } from "@reduxjs/toolkit";
import countersReducer from "../features/counters/countersSlice"
import postsReducer from "../features/posts/postsSlice";
import todosReducer from "../features/todos/todosSlice";
import photosReducer from "../features/photos/photosSlice";
import commentsReducer from './../features/comment/commentsSlice';
import usersReducer from "../features/users/usersSlice";
import albumsReducer from "../features/albums/albumsSlice";

/*
const store = configureStore({
    reducer: {
        counters: countersReducer,
        posts: postsReducer,
        todos: todosReducer,
        photos: photosReducer,
        comments: commentsReducer,
        users: usersReducer,
        albums: albumsReducer,
    }
})

export default store;
*/

const store = configureStore({
    reducer: {
        counters: countersReducer,
        posts: postsReducer,
        todos: todosReducer,
        photos: photosReducer,
        comments: commentsReducer,
        users: usersReducer,
        albums: albumsReducer,
    }
})

export default store;