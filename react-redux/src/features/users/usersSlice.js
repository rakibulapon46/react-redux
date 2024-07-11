import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getUsers } from './usersAPI';

const initialState = {
    users : [],
    isLoading: false,
    isError: false,
    error: null,
}

export const fetchUsers = createAsyncThunk("users/fetchUsers",
    async () => {
        const users = getUsers();
        return users;
    }
)


const usersSlice = createSlice({
    name: "users",
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(fetchUsers.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        })
        .addCase(fetchUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.users = action.payload;
        })
        .addCase(fetchUsers.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.error = action.error?.message;
        })
    }
})

export default usersSlice.reducer;