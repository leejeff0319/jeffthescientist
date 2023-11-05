import {configureStore} from '@reduxjs/toolkit';
import pizzaReducer from './buttonSlice';

export const store = configureStore ({
    reducer: {
        pizza: pizzaReducer,
    },
});
