import api from "@config/axios";
import { formObject } from "@shared-types/formData/form-object";
import { apiErrorHandler } from "@utils/api-error-handler";

const getCsrfCookie = async () => {
  await api.get("/sanctum/csrf-cookie");
};

export function authService(url: string) {
  const loginUser = async (formState: formObject<string>) => {
    await getCsrfCookie();
    return apiErrorHandler(() => api.post(`${url}/login`, formState));
  };

  const registerUser = async (formState: formObject<string>) => {
    await getCsrfCookie();
    return apiErrorHandler(() => api.post(`${url}/register`, formState));
  };

  const logoutUser = async () => {
    await getCsrfCookie();
    return apiErrorHandler(() => api.post(`${url}/logout`));
  };

  return {
    logoutUser,
    loginUser,
    registerUser,
  };
}
