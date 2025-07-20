// src/redux/slices/productsCategorySlice.js
import { createSlice } from "@reduxjs/toolkit";
import {
    fetchProductsCategory,
    addProductsCategory,
    updateProductsCategory,
    deleteProductsCategory,
} from "../../redux/Products/productsCategory.thunk.js"; // Adjust path if needed

const productsCategorySlice = createSlice({
    name: "productsCategory",
    initialState: {
        items: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Fetch
            .addCase(fetchProductsCategory.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProductsCategory.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchProductsCategory.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Add
            .addCase(addProductsCategory.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addProductsCategory.fulfilled, (state, action) => {
                state.loading = false;
                state.items.push(action.payload);
            })
            .addCase(addProductsCategory.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Update
            .addCase(updateProductsCategory.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateProductsCategory.fulfilled, (state, action) => {
                state.loading = false;
                const index = state.items.findIndex(
                    (item) => item._id === action.payload._id
                );
                if (index !== -1) {
                    state.items[index] = action.payload;
                }
            })
            .addCase(updateProductsCategory.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Delete
            .addCase(deleteProductsCategory.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteProductsCategory.fulfilled, (state, action) => {
                state.loading = false;
                state.items = state.items.filter((item) => item._id !== action.payload);
            })
            .addCase(deleteProductsCategory.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default productsCategorySlice.reducer;
