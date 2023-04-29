import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
  events: [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
    setEvents: (state, action) => {
      state.events = action.payload.events;
    },
    setEvent: (state, action) => {
      const updatedEvents = state.posts.map((event) => {
        if (event._id === action.payload.event._id) return action.payload.event;
        return event;
      });
      state.posts = updatedEvents;
    },
  },
});

export const { setLogin, setLogout, setEvents, setEvent } = authSlice.actions;
export default authSlice.reducer;
