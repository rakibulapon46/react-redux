import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getPhotos } from "./photosAPI"

const initialState = {
    photos: [],
    isLoading: false,
    isError: false,
    error: null,
}

export const fetchPhotos = createAsyncThunk("photos/fetchPhotos",
    async () => {
        const photos = getPhotos();
        return photos;
    }
)

const photosSlice = createSlice({
    name: "photos",
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(fetchPhotos.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        })
        .addCase(fetchPhotos.fulfilled, (state, action) => {
            state.isLoading = false;
            state.photos = action.payload;
        })
        .addCase(fetchPhotos.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.error = action.error?.message;
        })
    }
})


export default photosSlice.reducer;