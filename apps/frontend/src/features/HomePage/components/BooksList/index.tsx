import { Books } from "@shared-types/library/books";
import { FC } from "react";
import { Book } from "../Book";

type BooksListProps = {
  books: Books;
};

export const BooksList: FC<BooksListProps> = ({ books }) => {
  return (
    <ul className="grid grid-cols-5 gap-5 my-20 mx-10">
      {books.data.map((book) => (
        <Book book={book} key={book.id}>
          <Book.Image />
          <Book.Title />
          <Book.ReadButton />
        </Book>
      ))}
    </ul>
  );
};
