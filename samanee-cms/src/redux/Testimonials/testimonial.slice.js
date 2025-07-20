// redux/slices/testimonialSlice.js
import { createSlice } from "@reduxjs/toolkit";
import {
    fetchTestimonials,
    fetchTestimonialById,
    createTestimonial,
    updateTestimonial,
    deleteTestimonial,
} from "./testimonial.thunk.js";

const testimonialSlice = createSlice({
    name: "testimonial",
    initialState: {
        testimonials: [],
        current: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTestimonials.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchTestimonials.fulfilled, (state, action) => {
                state.loading = false;
                state.testimonials = action.payload;
            })
            .addCase(fetchTestimonials.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            .addCase(fetchTestimonialById.fulfilled, (state, action) => {
                state.current = action.payload;
            })

            .addCase(createTestimonial.fulfilled, (state, action) => {
                state.testimonials.push(action.payload);
            })

            .addCase(updateTestimonial.fulfilled, (state, action) => {
                const index = state.testimonials.findIndex(
                    (item) => item._id === action.payload._id
                );
                if (index !== -1) state.testimonials[index] = action.payload;
            })

            .addCase(deleteTestimonial.fulfilled, (state, action) => {
                state.testimonials = state.testimonials.filter(
                    (item) => item._id !== action.payload
                );
            });
    },
});

export default testimonialSlice.reducer;
