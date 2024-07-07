import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getComments } from './commentAPI';

const initialState = {
    comments: [],
    isLoading: false,
    isError: false,
    error: null,
}

export const fetchComments = createAsyncThunk("comments/fetchComments",
    async () => {
        const comments = getComments();
        return comments;
    }
) 

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(fetchComments.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        })
        .addCase(fetchComments.fulfilled, (state, action) => {
            state.isLoading = false;
            state.comments = action.payload;
        })
        .addCase(fetchComments.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.error = action.error?.message;
        })
    }
})

export default commentsSlice.reducer;