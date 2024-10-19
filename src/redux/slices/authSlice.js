import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    loading: false,
    message: null,
  },
  reducers: {
    signinRequest: (state) => {
      state.loading = true;
      state.message = null;
    },
    signinSuccess: (state, action) => {
      state.loading = false;
      state.message = null;
      state.user = action.payload;
    },

    signupRequest: (state) => {
      state.loading = true;
      state.message = null;
    },
    signupSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    authFailure: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    signout: (state) => {
      state.user = null;
    },
  },
});

export const {
  signinRequest,
  signinSuccess,
  authFailure,
  signupRequest,
  signupSuccess,
  signout,
} = authSlice.actions;
export default authSlice;
