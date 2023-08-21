import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './features/counter/contactSlice';

export const store = configureStore({
    reducer: {
        contacts: contactReducer
    },
})