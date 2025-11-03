import { Author } from "./author";

export type Book = {
  id: number;
  title: string;
  created_at: string;
  updated_at: string;
  authors: Author[];
};
