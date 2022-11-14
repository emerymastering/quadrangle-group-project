import { configureStore } from "@reduxjs/toolkit";
import charactersReducer from "./characters/slice";

const store = configureStore({
  reducer: {
    characters: charactersReducer,
  },
});

export default store;
