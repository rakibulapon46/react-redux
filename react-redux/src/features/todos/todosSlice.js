import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getTodos } from './todosAPI';

const initialState = {
    todos: [],
    isLoading: false,
    isError: false,
    error: null,
}

export const fetchTodos = createAsyncThunk("todos/fetchTodos",
    async () => {
        const todos = getTodos();
        return todos;
    }
)

const todosSlice = createSlice({
    name: "todos",
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(fetchTodos.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        })
        .addCase(fetchTodos.fulfilled, (state, action) => {
            state.isLoading = false;
            state.todos = action.payload;
        })
        .addCase(fetchTodos.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.error = action.error?.message;
        })
    }
})

export default todosSlice.reducer;