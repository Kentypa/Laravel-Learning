import api from "@config/axios";
import { apiErrorHandler } from "@utils/api-error-handler";

export function testService(url: string) {
  const getTestMessage = async () => {
    return apiErrorHandler(() =>
      api.get<{ message: string }>(`${url}/api/test`)
    );
  };

  return {
    getTestMessage,
  };
}
