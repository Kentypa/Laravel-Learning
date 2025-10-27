export type UserData = {
  id: number;
  name: string;
  email: string;
  email_verified_at: Date | null;
  created_at: string;
  updated_at: string;
  authLoading: boolean;
  isAuthenticated: boolean | null;
};
