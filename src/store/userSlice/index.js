import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  user: {},
  loggedInStatus: false,
  loginOpen: false,
  signupOpen: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload.user;
      if (action.payload.user) {
        state.loggedInStatus = true;
      }
    },
    removeUser(state, action) {
      state.user = {};
      state.loggedInStatus = false;
    },
    opensignupForm(state, action) {
      state.signupOpen = true;
    },
    closeSignupform(state, action) {
      state.signupOpen = false;
    },
    openloginForm(state, action) {
      state.loginOpen = true;
    },
    closeloginform(state, action) {
      state.loginOpen = false;
    },
  },
});

export default userSlice.reducer;
export const userActions = userSlice.actions;
