import { createAsyncThunk } from '@reduxjs/toolkit';
import API from '../../api/axiosInstance.service';

// Fetch all announcements
export const fetchAnnouncements = createAsyncThunk(
    'announcements/fetchAll',
    async (_, { rejectWithValue }) => {
        try {
            const response = await API.get('/announcement');
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || 'Failed to fetch announcements');
        }
    }
);

// Add a new announcement
export const addAnnouncement = createAsyncThunk(
    'announcements/add',
    async (newData, { rejectWithValue }) => {
        try {
            const response = await API.post('/announcement', newData);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || 'Failed to add announcement');
        }
    }
);

// Update an existing announcement
export const updateAnnouncement = createAsyncThunk(
    'announcements/update',
    async ({ id, updatedData }, { rejectWithValue }) => {
        try {
            const response = await API.patch(`/announcement/${id}`, updatedData);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || 'Failed to update announcement');
        }
    }
);

// Delete an announcement
export const deleteAnnouncement = createAsyncThunk(
    'announcements/delete',
    async (id, { rejectWithValue }) => {
        try {
            await API.delete(`/announcement/${id}`);
            return id;
        } catch (error) {
            return rejectWithValue(error.response?.data || 'Failed to delete announcement');
        }
    }
);
