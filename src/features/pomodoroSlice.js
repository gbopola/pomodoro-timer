import { createSlice } from '@reduxjs/toolkit';

export const pomodoroSlice = createSlice({
  name: 'pomodoro',
  initialState: {
    pomodoro: 1500,
    shortBreak: 300,
    longBreak: 600,
    currTab: 1,
    color: 'var(--bright-red)',
    font: 'Kumbh Sans, sans-serif',
    modal: false,
    isPlaying: false,
    key: 0,
  },
  reducers: {
    changeCurrTab: (state, action) => {
      state.currTab = action.payload;
      state.key += 1;
      state.isPlaying = false;
    },

    changeAllValues: (state, action) => {
      state.pomodoro = action.payload.pomodoro * 60;
      state.shortBreak = action.payload.shortBreak * 60;
      state.longBreak = action.payload.longBreak * 60;
      state.color = action.payload.color;
      state.font = action.payload.font;
      state.key += 1;
      state.isPlaying = false;
      state.modal = !state.modal;
    },

    changeModalView: (state) => {
      state.modal = !state.modal;
    },

    changePlay: (state, action) => {
      state.isPlaying = !state.isPlaying;
      state.key = action.payload === 'RESTART' && state.key + 1;
    },
    reset: (state) => {
      state.isPlaying = null;
    },
  },
});

export const {
  changeAllValues,
  changeCurrTab,
  changeModalView,
  changePlay,
  reset,
} = pomodoroSlice.actions;

export default pomodoroSlice.reducer;
