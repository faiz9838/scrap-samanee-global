import { createSlice } from "@reduxjs/toolkit";
import {
    fetchWhoWeAre,
    createWhoWeAre,
    updateWhoWeAre,
    deleteWhoWeAre,
} from "./WhoWeAre.thunk"; // Adjust path if needed

// ✅ Corrected initial state
const initialState = {
    items: [],        // Holds the list of entries
    loading: false,
    error: null,
};

const whoWeAreSlice = createSlice({
    name: 'whoWeAre',
    initialState,
    reducers: {
        clearWhoWeAre: (state) => {
            state.items = [];
        },
        clearError: (state) => {
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            // ✅ FETCH
            .addCase(fetchWhoWeAre.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchWhoWeAre.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchWhoWeAre.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // ✅ CREATE
            .addCase(createWhoWeAre.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createWhoWeAre.fulfilled, (state, action) => {
                state.loading = false;
                state.items.push(action.payload);
            })
            .addCase(createWhoWeAre.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // ✅ UPDATE
            .addCase(updateWhoWeAre.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateWhoWeAre.fulfilled, (state, action) => {
                state.loading = false;
                state.items = state.items.map(item =>
                    item._id === action.payload._id ? action.payload : item
                );
            })
            .addCase(updateWhoWeAre.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // ✅ DELETE
            .addCase(deleteWhoWeAre.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteWhoWeAre.fulfilled, (state, action) => {
                state.loading = false;
                const deletedId = action.meta.arg;
                state.items = state.items.filter(item => item._id !== deletedId);
            })
            .addCase(deleteWhoWeAre.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { clearWhoWeAre, clearError } = whoWeAreSlice.actions;
export default whoWeAreSlice.reducer;
