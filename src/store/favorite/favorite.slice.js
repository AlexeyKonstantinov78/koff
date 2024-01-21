import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriteList: JSON.parse(localStorage.getItem("favorite") || "[]"),
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addToFavorite: (state, action) => {
      state.favoriteList.push(action.payload);
      localStorage.setItem("favorite", JSON.stringify(state.favoriteList));
    },
    removeFromFavorite: (state, action) => {
      const list = state.favoriteList.filter((id) => id !== action.payload);
      localStorage.setItem("favorite", JSON.stringify(list));
    },
  },
});

export const { addToFavorite, removeFromFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
