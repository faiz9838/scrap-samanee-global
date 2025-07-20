import { createSlice } from '@reduxjs/toolkit';
import {
    fetchAnnouncements,
    addAnnouncement,
    updateAnnouncement,
    deleteAnnouncement,
} from '../Announcement/announcement.thunk.js';

const initialState = {
    announcements: [],
    loading: false,
    error: null,
};

const announcementSlice = createSlice({
    name: 'announcements',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAnnouncements.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAnnouncements.fulfilled, (state, action) => {
                state.loading = false;
                state.announcements = action.payload;
            })
            .addCase(fetchAnnouncements.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(addAnnouncement.fulfilled, (state, action) => {
                state.announcements.push(action.payload);
            })
            .addCase(updateAnnouncement.fulfilled, (state, action) => {
                const index = state.announcements.findIndex(a => a._id === action.payload._id);
                if (index !== -1) state.announcements[index] = action.payload;
            })
            .addCase(deleteAnnouncement.fulfilled, (state, action) => {
                state.announcements = state.announcements.filter(a => a._id !== action.payload);
            });
    },
});

export default announcementSlice.reducer;
