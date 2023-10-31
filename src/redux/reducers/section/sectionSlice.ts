import { Action, createSlice } from "@reduxjs/toolkit";
import { TSectionPage } from "../../../types/categories.type";

export interface SectionAction {
  setSection: (payload: TSectionPage) => Action;
}

const initialState: TSectionPage = "principal";

const sectionSlice = createSlice({
  name: "section",
  initialState,
  reducers: {
    setSection: (state, action) => {
      return action.payload;
    },
  },
});

export const { setSection } = sectionSlice.actions;
export default sectionSlice.reducer;
