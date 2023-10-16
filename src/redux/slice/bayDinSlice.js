import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: [],
  searchTerm: "",
};

export const bayDinSlice = createSlice({
  name: "bayDinSlice",
  initialState,
  reducers: {
    setQuestions: (state, { payload }) => {
      state.questions = payload;
    },
    setSearchTerm: (state, { payload }) => {
      state.searchTerm = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSearchTerm, setQuestions } = bayDinSlice.actions;

export default bayDinSlice.reducer;
