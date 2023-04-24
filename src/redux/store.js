import { configureStore } from "@reduxjs/toolkit";
import mainstackReducer from "./features/main/mainSlick";

export const store = configureStore({
  reducer: {
    mainstack: mainstackReducer,
  },
});
