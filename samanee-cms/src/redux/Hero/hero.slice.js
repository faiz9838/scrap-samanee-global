import { createSlice } from '@reduxjs/toolkit';
import { fetchHero, addHero, updateHero, deleteHero } from './hero.thunk';

const heroSlice = createSlice({
    name: 'hero',
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // ✅ Fetch Heroes
            .addCase(fetchHero.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchHero.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchHero.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // ✅ Add Hero
            .addCase(addHero.fulfilled, (state, action) => {
                state.data.push(action.payload.data); // assuming { message, data } response
            })

            // ✅ Update Hero
            .addCase(updateHero.fulfilled, (state, action) => {
                const updatedHero = action.payload.data;
                const index = state.data.findIndex((hero) => hero._id === updatedHero._id);
                if (index !== -1) {
                    state.data[index] = updatedHero;
                }
            })

            // ✅ Delete Hero
            .addCase(deleteHero.fulfilled, (state, action) => {
                state.data = state.data.filter((hero) => hero._id !== action.payload);
            });
    }
});

export default heroSlice.reducer;
