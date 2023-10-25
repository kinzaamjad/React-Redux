import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    favoriteProducts: [],
    products: [],
  },
  reducers: {
    addToFavorite: (state, action) => {
      const { id } = action.payload.product;
      if (!state.favoriteProducts.includes(id)) {
        state.favoriteProducts.push(id);
      }
    },

    removeFromFavorite: (state, action) => {
      const { id } = action.payload.product;
      state.favoriteProducts = state.favoriteProducts.filter(
        (productId) => productId !== id
      );
    },

  
    clearFavorites: (state) => {
      state.favoriteProducts = [];
    },
  },
});

const favoriteReducer = favoriteSlice.reducer;
export const {
  addToFavorite,
  removeFromFavorite,
  clearFavorites,
} = favoriteSlice.actions;
export default favoriteReducer;
