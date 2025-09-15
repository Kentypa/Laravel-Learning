import { HomePage } from "@screens/HomePage";
import { ProtectedRoute } from "@wrappers/ProtectedRoute";
import { Routes, Route } from "react-router";
import { FC } from "react";

export const ApplicationRoutes: FC = () => {
  return (
    <Routes>
      <Route path="*" element={<HomePage />} />
      <Route element={<ProtectedRoute />}></Route>
    </Routes>
  );
};
