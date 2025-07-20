// src/redux/slices/productSlice.js
import { createSlice } from '@reduxjs/toolkit';
import {
    fetchProducts,
    fetchProductById,
    fetchProductsByCategory,
    createProduct,
    updateProduct,
    deleteProduct,
} from '../Products/products.thunk.js';

const initialState = {
    items: [],        // Use items instead of 'products' for consistency
    product: null,
    loading: false,
    error: null,
};

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        clearProduct: (state) => {
            state.product = null;
        },
        clearError: (state) => {
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            // Fetch all products
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Get product by ID
            .addCase(fetchProductById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProductById.fulfilled, (state, action) => {
                state.loading = false;
                state.product = action.payload;
            })
            .addCase(fetchProductById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Get products by category
            .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
                state.items = action.payload;
            })

            // Create product
            .addCase(createProduct.fulfilled, (state, action) => {
                state.items.push(action.payload);
            })

            // Update product
            .addCase(updateProduct.fulfilled, (state, action) => {
                const index = state.items.findIndex(p => p._id === action.payload._id);
                if (index !== -1) {
                    state.items[index] = action.payload;
                }
            })

            // Delete product
            .addCase(deleteProduct.fulfilled, (state, action) => {
                state.items = state.items.filter(p => p._id !== action.payload.id);
            })

            // Shared rejection fallback
            .addMatcher(
                (action) => action.type.endsWith('/rejected'),
                (state, action) => {
                    state.loading = false;
                    state.error = action.payload;
                }
            );
    },
});

export const { clearProduct, clearError } = productSlice.actions;
export default productSlice.reducer;
