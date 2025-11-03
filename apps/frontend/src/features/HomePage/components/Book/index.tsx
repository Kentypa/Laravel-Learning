import { Book } from "@shared-types/library/book";
import { FC } from "react";
import NotFoundIcon from "@icons/not-found.svg?react";
import { Button } from "@ui/Button";
import { useNavigate } from "react-router";
import { PagesEndponts } from "@enums/pagesEndpoints";

type BookCartProps = {
  book: Book;
};

export const BookCart: FC<BookCartProps> = ({ book }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`${PagesEndponts.BOOK}/${book.id}`);
  };

  return (
    <li
      className="flex flex-col p-3 border-2 rounded-2xl border-primary"
      key={book.id}
    >
      <NotFoundIcon className="fill-primary size-auto" />
      <h3 className="max-w-80 truncate mb-5">{book.title}</h3>
      <Button
        className="bg-green-500 text-white rounded-md self-end px-2 py-1"
        handleClick={handleClick}
      >
        <p>Read</p>
      </Button>
    </li>
  );
};
