import { createAsyncThunk } from '@reduxjs/toolkit';
import API from '../../api/axiosInstance.service';

// Fetch Hero Data
export const fetchHero = createAsyncThunk(
    'hero/fetchHero',
    async (_, { rejectWithValue }) => {
        try {
            const response = await API.get('/hero');
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || 'Something went wrong');
        }
    }
);

// Add Hero Data
export const addHero = createAsyncThunk(
    'hero/addHero',
    async (newHero, { rejectWithValue }) => {
        try {
            const response = await API.post('/hero', newHero);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || 'Failed to add hero');
        }
    }
);

// Update Hero Data
export const updateHero = createAsyncThunk(
    'hero/updateHero',
    async ({ id, updatedData }, { rejectWithValue }) => {
        try {
            const response = await API.patch(`/hero/${id}`, updatedData);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || 'Failed to update hero');
        }
    }
);

// Delete Hero Data
export const deleteHero = createAsyncThunk(
    'hero/deleteHero',
    async (id, { rejectWithValue }) => {
        try {
            await API.delete(`/hero/${id}`);
            return id; // Return the ID to remove from state
        } catch (error) {
            return rejectWithValue(error.response?.data || 'Failed to delete hero');
        }
    }
);
