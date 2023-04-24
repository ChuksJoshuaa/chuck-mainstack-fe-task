import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isError: false,
  data: {},
  locations: [],
  sources: [],
  isSidebarOpen: true,
};

export const mainSlice = createSlice({
  name: "mainstack",
  initialState,
  reducers: {
    setLoader: (state, action) => {
      state.isLoading = action.payload;
    },

    setError: (state, action) => {
      state.isError = action.payload;
    },

    setData: (state, action) => {
      state.data = action.payload;
    },

    setLocations: (state, action) => {
      state.locations = action.payload;
    },

    setSources: (state, action) => {
      state.sources = action.payload;
    },

    openSidebar: (state, action) => {
      state.isSidebarOpen = action.payload;
    },
  },
});

export const {
  setLoader,
  setError,
  setData,
  openSidebar,
  setSources,
  setLocations,
} = mainSlice.actions;

export default mainSlice.reducer;
