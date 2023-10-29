import { Action, PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  IBlog,
  IPrincipalSection,
  ISectionBlog,
} from "../../../types/blog.type";
import { blogs } from "../../../data/blogs";
import { localStorage } from "../../../utils/localStorage";

export interface BlogAction {
  setPrincipal: (payload: IBlog) => Action;
  setSection: (payload: ISectionBlog) => Action;
  clearBlog: () => Action;
}
const localS = localStorage("form");
const initialState: IBlog = localS ?? blogs.initialBlog;

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    setPrincipalRD: (state, action: PayloadAction<IPrincipalSection>) => {
      localStorage("form", { ...state, ...action.payload });
      state.title = action.payload.title;
      state.description = action.payload.description;
      state.category = action.payload.category;
      state.content = action.payload.content;
      state.image = action.payload.image;
    },
    setSectionRD: (state, action: PayloadAction<ISectionBlog>) => {
      localStorage("form", {
        ...state,
        sections: [...state.sections, action.payload],
      });
      state.sections = [...state.sections, action.payload];
    },
    clearBlog: () => {
      return initialState;
    },
  },
});

export const { setPrincipalRD, setSectionRD, clearBlog } = blogSlice.actions;

export default blogSlice.reducer;
