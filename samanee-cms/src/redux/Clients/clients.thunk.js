import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../api/axiosInstance.service";

// Fetch all clients    
export const fetchClients = createAsyncThunk(
    "clients/fetchAll",
    async (_, { rejectWithValue }) => {
        try {
            const response = await API.get("/clients");
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error.response?.data || "Failed to fetch clients"
            );
        }
    }
);

// Add a new client
export const addClient = createAsyncThunk(
    "clients/add",
    async (newData, { rejectWithValue }) => {
        try {
            const response = await API.post("/clients", newData);
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error.response?.data || "Failed to add client"
            );
        }
    }
);

// Update an existing client
export const updateClient = createAsyncThunk(
    "clients/update",
    async ({ id, updatedData }, { rejectWithValue }) => {
        try {
            const response = await API.patch(`/clients/${id}`, updatedData);
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error.response?.data || "Failed to update client"
            );
        }
    }
);

// Delete a client
export const deleteClient = createAsyncThunk(
    "clients/delete",
    async (id, { rejectWithValue }) => {
        try {
            await API.delete(`/clients/${id}`);
            return id;
        } catch (error) {
            return rejectWithValue(
                error.response?.data || "Failed to delete client"
            );
        }
    }
);