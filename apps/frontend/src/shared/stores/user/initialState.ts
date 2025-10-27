import { UserData } from "@shared-types/auth/user-data";

export const initialState: UserData = {
  id: 0,
  email: "",
  authLoading: true,
  isAuthenticated: null,
  email_verified_at: null,
  name: "",
  created_at: "",
  updated_at: "",
};
