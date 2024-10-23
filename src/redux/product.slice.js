import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { callApi } from "../api/api";


export const productThunk = createAsyncThunk("productApi", async () => {
    try {
        const result = await callApi();
        return result;
    } catch (e) {
        throw new Error(e.message)
    }
})

const productSlice = createSlice({
    name: "product",
    initialState: {
        products: [],
        loading: false,
        ekart: []
    },
    reducers: {
        addToCart: (state, action) => {
            state.ekart.push(action.payload);
        },
        removeFromCart: (state, action) => {
            state.ekart = state.ekart.filter((item) => item.id !== action.payload);
        },
        clearCart: (state) => {
            state.ekart = [];
        },

    },
    extraReducers: (builder) => {
        builder.addCase(productThunk.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(productThunk.fulfilled, (state, action) => {
            state.products = action.payload;
        })
        builder.addCase(productThunk.rejected, (state) => {
            state.loading = true;
        })

    }
});

export const { addToCart, removeFromCart, clearCart } = productSlice.actions;
export default productSlice.reducer;