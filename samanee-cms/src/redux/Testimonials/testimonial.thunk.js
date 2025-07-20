// src/redux/thunks/testimonialThunk.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../api/axiosInstance.service";

// GET all testimonials
export const fetchTestimonials = createAsyncThunk(
    "testimonial/fetchAll",
    async (_, { rejectWithValue }) => {
        try {
            const res = await API.get("/testimonials");
            return res.data;
        } catch (err) {
            return rejectWithValue(err.response?.data?.message);
        }
    }
);

// GET single testimonial
export const fetchTestimonialById = createAsyncThunk(
    "testimonial/fetchById",
    async (id, { rejectWithValue }) => {
        try {
            const res = await API.get(`/testimonials/${id}`);
            return res.data;
        } catch (err) {
            return rejectWithValue(err.response?.data?.message);
        }
    }
);

// POST create testimonial
export const createTestimonial = createAsyncThunk(
    "testimonial/create",
    async (testimonial, { rejectWithValue }) => {
        try {
            const res = await API.post("/testimonials", testimonial);
            return res.data;
        } catch (err) {
            return rejectWithValue(err.response?.data?.message);
        }
    }
);

// PUT update testimonial
export const updateTestimonial = createAsyncThunk(
    "testimonial/update",
    async ({ id, testimonial }, { rejectWithValue }) => {
        try {
            const res = await API.put(`/testimonials/${id}`, testimonial);
            return res.data;
        } catch (err) {
            return rejectWithValue(err.response?.data?.message);
        }
    }
);

// DELETE testimonial
export const deleteTestimonial = createAsyncThunk(
    "testimonial/delete",
    async (id, { rejectWithValue }) => {
        try {
            await API.delete(`/testimonials/${id}`);
            return id;
        } catch (err) {
            return rejectWithValue(err.response?.data?.message);
        }
    }
);
