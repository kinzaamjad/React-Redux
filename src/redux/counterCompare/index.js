import { createSlice } from "@reduxjs/toolkit";

const compareSlice = createSlice({
  name: "compare",
  initialState: {
    comparedProducts: [],
    products: [],
  },

  reducers: {
    addToCompare: (state, action) => {
      const { id, price, title, thumbnail } = action.payload.product;
      const existingProduct = state.comparedProducts.find(
        (product) => product.id === id
      );
      if (!existingProduct) {
        state.comparedProducts.push({ id, price, title, thumbnail });
      }
    },

    removeFromCompare: (state, action) => {
      const { id } = action.payload.product;

      state.comparedProducts = state.comparedProducts.filter(
        (product) => product.id !== id
      );
    },
    compareProducts: (state, action) => {
      const { id } = action.payload.product;
      if (state.comparedProducts.length < 2) {
        return;
      }

      const productsToCompare = state.comparedProducts.map((productId) => {
        const product = state.products.find((p) => p.id === productId);
        return product
          ? { id: product.id, name: product.name, price: product.price }
          : null;
      });

      const validProductsToCompare = productsToCompare.filter(
        (product) => product !== null
      );

      if (validProductsToCompare.length < 2) {
        return;
      }
    },
  },
});

const compareReducer = compareSlice.reducer;
export const { addToCompare, compareProducts, removeFromCompare, addToCart } =
  compareSlice.actions;
export default compareReducer;
