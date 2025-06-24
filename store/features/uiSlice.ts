// store/features/uiSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UIState {
  darkMode: boolean;
  videoModalOpen: boolean;
}

const initialState: UIState = {
  darkMode: false,
  videoModalOpen: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleDarkMode(state: UIState) {
      state.darkMode = !state.darkMode;
    },
    setVideoModalOpen(state: UIState, action: PayloadAction<boolean>) {
      state.videoModalOpen = action.payload;
    },
  },
});

export const { toggleDarkMode, setVideoModalOpen } = uiSlice.actions;
export default uiSlice.reducer;
