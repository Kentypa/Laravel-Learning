import { Book } from "./book";

export interface AuthorResponse {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
  books: Book[];
}
