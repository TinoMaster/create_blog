import { Action, PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  IBlog,
  IPrincipalSection,
  ISectionBlog,
} from "../../../types/blog.type";
import { blogs } from "../../../data/blogs";
import {
  localStorage,
  sortIdsbeforeRemove,
  sortSectionsBeforeInsert,
} from "../../../utils/localStorage";

export interface BlogAction {
  setPrincipalRD: (payload: IBlog) => Action;
  setSectionRD: (payload: ISectionBlog) => Action;
  clearSection: (payload: ISectionBlog["id"]) => Action;
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
      const newState = sortSectionsBeforeInsert(action.payload, state);
      localStorage("form", newState);
      state = newState;
    },
    clearSection: (state, action: PayloadAction<ISectionBlog["id"]>) => {
      const newState = sortIdsbeforeRemove(action.payload, state);
      localStorage("form", newState);
      state = newState;
    },
    clearBlog: () => {
      localStorage("form", blogs.initialBlog);
      return initialState;
    },
  },
});

export const {
  setPrincipalRD,
  setSectionRD,
  clearBlog,
  clearSection,
}: BlogAction = blogSlice.actions;

export default blogSlice.reducer;
