import { Book } from "./book";
import { BooksLink } from "./books-link";

export type Books = {
  current_page: number;
  data: Book[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: BooksLink[];
  next_page_url: string;
  path: string;
  per_page: number;
  prev_page_url: unknown;
  to: number;
  total: number;
};
