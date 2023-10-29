import { Action, createSlice } from "@reduxjs/toolkit";
import { TSection } from "../../../types/categories.type";

export interface SectionAction {
  setSection: (payload: TSection) => Action;
}

const initialState: TSection = "principal";

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
