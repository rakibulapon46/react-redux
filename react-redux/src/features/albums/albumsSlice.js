import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    albums: [],
    isLoading: false,
    isError: false,
    error: null,
}

const albumsSlice = createSlice(())