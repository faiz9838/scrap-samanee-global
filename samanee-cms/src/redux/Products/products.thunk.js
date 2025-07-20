// src/redux/thunks/productThunks.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import API from '../../api/axiosInstance.service.js';

// Get all products
export const fetchProducts = createAsyncThunk('products/fetchAll', async (params, thunkAPI) => {
    try {
        const response = await API.get('/products', { params });
        return response.data.data || response.data; // Adjust based on your backend response structure
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
    }
});

// Get product by ID
export const fetchProductById = createAsyncThunk('products/fetchById', async (id, thunkAPI) => {
    try {
        const response = await API.get(`/products/${id}`);
        return response.data.data || response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
    }
});

// Get products by category
export const fetchProductsByCategory = createAsyncThunk('products/fetchByCategory', async (categoryId, thunkAPI) => {
    try {
        const response = await API.get(`/products/category/${categoryId}`);
        return response.data.data || response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
    }
});

// Create product
export const createProduct = createAsyncThunk('products/create', async (formData, thunkAPI) => {
    try {
        const response = await API.post('/products', formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });
        return response.data.data || response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
    }
});

// Update product
export const updateProduct = createAsyncThunk('products/update', async ({ id, formData }, thunkAPI) => {
    try {
        const response = await API.patch(`/products/${id}`, formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });
        return response.data.data || response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
    }
});

// Delete product
export const deleteProduct = createAsyncThunk('products/delete', async (id, thunkAPI) => {
    try {
        const response = await API.delete(`/products/${id}`);
        return { id, message: response.data.message };
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
    }
});
