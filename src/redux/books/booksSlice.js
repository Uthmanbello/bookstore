import { createSlice } from "@reduxjs/toolkit";
import bookItems from './bookItems';

const initialState = {
    bookItems: bookItems,
    isLoading: true,
};

const booksSlice = createSlice({
    name: 'bookstore',
    initialState,
    reducers: {
        addBook: (state, action) => {
            
        },
        removeBook: (state, action) => {
            const itemId = action.payload
            state.bookItems = state.bookItems.filter((item) =>
            item.id !== itemId)
        }


    }
})

export default booksSlice.reducer;