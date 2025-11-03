import api from "@config/axios";
import { Book } from "@shared-types/library/book";
import { Books } from "@shared-types/library/books";
import { apiErrorHandler } from "@utils/api-error-handler";

export function bookService(url: string) {
  const getBooks = async (page?: number, per_page?: number) => {
    return apiErrorHandler(() =>
      api.get<Books>(`${url}`, { params: { page, per_page } })
    );
  };

  const getBook = async (bookId: number) => {
    return apiErrorHandler(() => api.get<Book>(`${url}/${bookId}`));
  };

  return { getBooks, getBook };
}
