import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserData } from "@shared-types/auth/user-data";
import { initialState } from "./initialState";

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    changeByData: (state, action: PayloadAction<UserData>) => {
      Object.assign(state, action.payload);
    },
    changeIsAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
    changeAuthLoading: (state, action: PayloadAction<boolean>) => {
      state.authLoading = action.payload;
    },
    logout: () => {
      return { ...initialState, authLoading: false, isAuthenticated: false };
    },
  },
});

export const {
  changeByData,
  logout,
  changeAuthLoading,
  changeIsAuthenticated,
} = userSlice.actions;

export default userSlice.reducer;
