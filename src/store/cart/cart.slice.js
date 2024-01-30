import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL } from "../../const";

const initialState = {
  products: [],
  totalPrice: 0,
  totalCount: 0,
  loadingFetch: false,
  loadingAdd: false,
  loadingUpdate: false,
  loadingRemove: false,
  error: null,
};

export const fetchCart = createAsyncThunk(
  "cart/fetchCart",
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const token = state.auth.accessToken;

    try {
      const response = await fetch(`${API_URL}api/cart`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Не удалось загрузить содержимое корзины");
      }

      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const addProductToCart = createAsyncThunk(
  "cart/addProductToCart",
  async (productData, { getState, rejectWithValue }) => {
    const state = getState();
    const token = state.auth.accessToken;

    try {
      const response = await fetch(`${API_URL}api/cart/products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // eslint-disable-next-line quote-props, prettier/prettier
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(productData),
      });

      if (!response.ok) {
        throw new Error("Не удалось добавить в корзину");
      }

      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const updateProductToCart = createAsyncThunk(
  "cart/updateProductToCart",
  async (productData, { getState, rejectWithValue }) => {
    const state = getState();
    const token = state.auth.accessToken;

    try {
      const response = await fetch(`${API_URL}api/cart/products`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          // eslint-disable-next-line quote-props, prettier/prettier
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(productData),
      });

      if (!response.ok) {
        throw new Error("Не удалось обновить товар в корзине");
      }

      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const delProductToCart = createAsyncThunk(
  "cart/delProductToCart",
  async (id, { getState, rejectWithValue }) => {
    const state = getState();
    const token = state.auth.accessToken;

    try {
      const response = await fetch(`${API_URL}api/cart/products/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Не удалось удалить из корзины");
      }

      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.loadingFetch = true;
        state.error = null;
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.products = action.payload.products;
        state.totalPrice = action.payload.totalPrice;
        state.totalCount = action.payload.totalCount;
        state.loadingFetch = false;
        state.error = null;
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.loadingFetch = false;
        state.error = action.error.message;
      });

    builder
      .addCase(addProductToCart.pending, (state) => {
        state.loadingAdd = true;
        state.error = null;
      })
      .addCase(addProductToCart.fulfilled, (state, action) => {
        state.products.push(action.payload.product);
        state.totalCount = action.payload.totalCount;
        state.loadingAdd = false;
        state.error = null;
      })
      .addCase(addProductToCart.rejected, (state, action) => {
        state.loadingAdd = false;
        state.error = action.error.message;
        state.message = null;
      });

    builder
      .addCase(updateProductToCart.pending, (state) => {
        state.loadingUpdate = true;
        state.error = null;
      })
      .addCase(updateProductToCart.fulfilled, (state, action) => {
        state.products = state.products.map((product) => {
          if (product.id === action.payload.productCart.productId) {
            product.quantity = action.payload.productCart.quantity;
          }
          return product;
        });
        state.totalCount = action.payload.totalCount;
        state.loadingUpdate = false;
        state.error = null;
      })
      .addCase(updateProductToCart.rejected, (state, action) => {
        state.loadingUpdate = false;
        state.error = action.error.message;
        state.message = null;
      });

    builder
      .addCase(delProductToCart.pending, (state) => {
        state.loadingRemove = true;
        state.error = null;
      })
      .addCase(delProductToCart.fulfilled, (state, action) => {
        state.products = state.products.filter(
          (product) => product.id !== action.payload.id,
        );
        state.totalCount = action.payload.totalCount;
        state.loadingRemove = false;
        state.error = null;
      })
      .addCase(delProductToCart.rejected, (state, action) => {
        state.loadingRemove = false;
        state.message = null;
      });
  },
});

export default cartSlice.reducer;
