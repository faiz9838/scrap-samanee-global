import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../api/axiosInstance.service";

// Fetch Products Category Data
export const fetchProductsCategory = createAsyncThunk(
    "productsCategory/fetchProductsCategory",
    async (_, { rejectWithValue }) => {
        try {
            const response = await API.get("/productCategory");
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error.response?.data || "Something went wrong"
            );
        }
    }
);

// Add Products Category Data
export const addProductsCategory = createAsyncThunk(
    "productsCategory/addProductsCategory",
    async (newProductsCategory, { rejectWithValue }) => {
        try {
            const response = await API.post("/productCategory", newProductsCategory);
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error.response?.data || "Failed to add products category"
            );
        }
    }
);

// Update Products Category Data
export const updateProductsCategory = createAsyncThunk(
    "productsCategory/updateProductsCategory",
    async ({ id, updatedData }, { rejectWithValue }) => {
        try {
            const response = await API.patch(
                `/productCategory/${id}`,
                updatedData
            );
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error.response?.data || "Failed to update products category"
            );
        }
    }
);

// Delete Products Category Data    
export const deleteProductsCategory = createAsyncThunk(
    "productsCategory/deleteProductsCategory",
    async (id, { rejectWithValue }) => {
        try {
            await API.delete(`/productCategory/${id}`);
            return id; // Return the ID to remove from state
        } catch (error) {
            return rejectWithValue(
                error.response?.data || "Failed to delete products category"
            );
        }
    }
);