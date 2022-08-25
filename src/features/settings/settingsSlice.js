import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "dark",
  isOpen: false,
  songId: null
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    setIsOpen: (state, action) => {
      state.isOpen = action.payload;
    },
    setSongId: (state, action) => {
      state.songId = action.payload;
    }
  },
});

export const { setTheme, setIsOpen, setSongId } = settingsSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectSettings = (state) => state.settings;

export default settingsSlice.reducer;
