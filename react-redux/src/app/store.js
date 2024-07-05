import { configureStore } from "@reduxjs/toolkit";
import countersReducer from "../features/counters/countersSlice"
import postsReducer from "../features/posts/postsSlice";
import todosReducer from "../features/todos/todosSlice";
import photosReducer from "../features/photos/photosSlice";

const store = configureStore({
    reducer: {
        counters: countersReducer,
        posts: postsReducer,
        todos: todosReducer,
        photos: photosReducer,
    }
})

export default store;