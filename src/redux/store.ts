import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./reducers/blog/blogSlice";
import sectionReducer from "./reducers/section/sectionSlice";

const store = configureStore({
  reducer: {
    blog: blogReducer,
    section: sectionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
