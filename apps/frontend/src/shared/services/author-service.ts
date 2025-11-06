import api from "@config/axios";
import { AuthorResponse } from "@shared-types/library/author-request";
import { apiErrorHandler } from "@utils/api-error-handler";

export function authorService(url: string) {
  const getAuthor = async (authorId: number) => {
    return apiErrorHandler(() => api.get<AuthorResponse>(`${url}/${authorId}`));
  };
  return { getAuthor };
}
