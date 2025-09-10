import { useUserData } from "@hooks/user/use-user-data";
import { useUserVerify } from "@hooks/auth/use-user-validate";
import { HomePage } from "@screens/HomePage";
import { ProtectedRoute } from "@wrappers/ProtectedRoute";
import { Routes, Route } from "react-router";
import { FC } from "react";

export const ApplicationRoutes: FC = () => {
  const { isSuccess: isAuthenticated } = useUserVerify();
  useUserData(isAuthenticated);

  return (
    <Routes>
      <Route path="*" element={<HomePage />} />
      <Route element={<ProtectedRoute />}></Route>
    </Routes>
  );
};
