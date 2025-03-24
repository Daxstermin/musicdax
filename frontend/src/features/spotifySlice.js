import { createSlice } from '@reduxjs/toolkit';

const spotifySlice = createSlice({
  name: 'spotify',
  initialState: {
    tracks: [],
    currentTrack: null,
    isPlaying: false,
  },
  reducers: {
    setTracks: (state, action) => {
      state.tracks = action.payload;
    },
    setCurrentTrack: (state, action) => {
      state.currentTrack = action.payload;
    },
    togglePlay: (state) => {
      state.isPlaying = !state.isPlaying;
    },
  },
});

export const { setTracks, setCurrentTrack, togglePlay } = spotifySlice.actions;
export default spotifySlice.reducer;
