import api from "@config/axios";
import { UserData } from "@shared-types/auth/user-data";
import { apiErrorHandler } from "@utils/api-error-handler";

export function userService(url: string) {
  const getUser = async () => {
    return apiErrorHandler(() => api.get<UserData>(`${url}/user`));
  };

  return { getUser };
}
