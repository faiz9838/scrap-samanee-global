import { createSlice } from '@reduxjs/toolkit';
import {
    fetchClients,
    addClient,
    updateClient,
    deleteClient,
} from './clients.thunk.js';

const initialState = {
    clients: [],
    loading: false,
    error: null,
};

const clientSlice = createSlice({
    name: 'clients',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchClients.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchClients.fulfilled, (state, action) => {
                state.loading = false;
                state.clients = action.payload;
            })
            .addCase(fetchClients.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(addClient.fulfilled, (state, action) => {
                state.clients.push(action.payload);
            })
            .addCase(updateClient.fulfilled, (state, action) => {
                const index = state.clients.findIndex(c => c._id === action.payload._id);
                if (index !== -1) {
                    // Merge existing client with updated fields
                    state.clients[index] = {
                        ...state.clients[index],
                        ...action.payload
                    };
                }
            })
            .addCase(deleteClient.fulfilled, (state, action) => {
                state.clients = state.clients.filter(c => c._id !== action.payload);
            });
    },
});

export default clientSlice.reducer;