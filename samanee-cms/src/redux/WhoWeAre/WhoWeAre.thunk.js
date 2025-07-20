//thunk 
import { createAsyncThunk } from '@reduxjs/toolkit';
import API from '../../api/axiosInstance.service';

export const fetchWhoWeAre = createAsyncThunk('whoWeAre/fetch', async (_, thunkAPI) => {
    try {
        const response = await API.get('/who-we-are');
        return response.data.data || response.data; // Adjust based on your backend response structure
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
    }
});

export const createWhoWeAre = createAsyncThunk('whoWeAre/create', async (formData, thunkAPI) => {
    try {
        const response = await API.post('/who-we-are', formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });
        return response.data.data || response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
    }
});
export const updateWhoWeAre = createAsyncThunk('whoWeAre/update', async ({ id, formData }, thunkAPI) => {
    try {
        const response = await API.patch(`/who-we-are/${id}`, formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });
        return response.data.data || response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
    }
});
export const deleteWhoWeAre = createAsyncThunk('whoWeAre/delete', async (id, thunkAPI) => {
    try {
        const response = await API.delete(`/who-we-are/${id}`);
        return response.data.data || response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
    }
});

