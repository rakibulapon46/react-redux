import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAlbums } from "./albumsAPI";

const initialState = {
  albums: [],
  isLoading: false,
  isError: false,
  error: null,
};

export const fetchAlbums = createAsyncThunk("albums/fetchAlbums", async () => {
  const albums = getAlbums();
  return albums;
});

const albumsSlice = createSlice({
  name: "albums",
  initialState,
  extraReducers: (builder) => {
    builder
    .addCase(fetchAlbums.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
    })
    .addCase(fetchAlbums.fulfilled, (state, action) => {
        state.isLoading = false;
        state.albums = action.payload;
    })
    .addCase(fetchAlbums.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message
    });
  },
});

export default albumsSlice.reducer;
