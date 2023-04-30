import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
  events: [], // events is initialized as an empty array
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
      const eventToUpdate = action.payload.event;
      if (eventToUpdate) {
        const updatedEvents = state.events.map((event) => {
          if (event._id === eventToUpdate._id) return eventToUpdate;
          return event;
        });
      }
    },
  },
});

export const { setLogin, setLogout, setEvents, setEvent } = authSlice.actions;
export default authSlice.reducer;
