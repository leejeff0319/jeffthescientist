import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    toppings: ['pepperoni'],
    gluten: true
}

export const buttonSlice = createSlice({
    name: 'button',
    initialState,
    reducers: {
        toggleGluten: (state) => {
            state.gluten = !state.gluten
        },
        addTopping: (state, action) => {
            state.toppings = [...state.toppings, action.payload]
        },
    },
})

export const {toggleGluten, addToppping} = buttonSlice.actions

export default buttonSlice.reducer