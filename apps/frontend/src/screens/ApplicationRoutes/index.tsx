import { HomePage } from "@screens/HomePage";
import { ProtectedRoute } from "@wrappers/ProtectedRoute";
import { Routes, Route } from "react-router";
import { FC } from "react";
import { UserPage } from "@screens/UserPage";
import { useInitializationUser } from "@hooks/auth/use-user-initialization";
import { LoginPage } from "@screens/AuthPages/LoginPage";
import { RegisterPage } from "@screens/AuthPages/RegisterPage";
import { BookPage } from "@screens/BookPage";
import { AuthorPage } from "@screens/AuthorPage";

export const ApplicationRoutes: FC = () => {
  useInitializationUser();

  return (
    <Routes>
      <Route path="*" element={<HomePage />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/user" element={<UserPage />} />
      </Route>
      <Route path="book/:bookId" element={<BookPage />} />
      <Route path="author/:authorId" element={<AuthorPage />} />
      <Route path="auth">
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>
    </Routes>
  );
};
