import { createSlice } from "@reduxjs/toolkit";

import { getNextId } from "../../util";

const initialState = [
  { id: 0, title: "Danger Zone", artist: "Kenny Loggins", album: "Top Gun" },
  { id: 1, title: "Never Gonna Give You Up", artist: "Rick Astley", album: "Whenever You Need Somebody" },
];

export const counterSlice = createSlice({
  name: "songList",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    addSong: (state, action) => {
      const id = getNextId(state);
      state.push({ ...action.payload, id });
    },
    editSong: (state, action) => {
      const songIndex = state.findIndex((s) => s.id === action.payload.id);
      state[songIndex] = { ...state[songIndex], ...action.payload };
    },
    removeSong: (state, action) => {
      return state.filter((s) => s.id !== action.payload);
    },
  },
});

export const { addSong, editSong, removeSong } = counterSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectSongList = (state) => state.songList;

export default counterSlice.reducer;
