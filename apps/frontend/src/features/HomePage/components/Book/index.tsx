import { Book as BookType } from "@shared-types/library/book";
import {
  createContext,
  useContext,
  FC,
  HTMLAttributes,
  ReactNode,
} from "react";
import { useNavigate } from "react-router";
import { PagesEndponts } from "@enums/pagesEndpoints";
import { Button } from "@ui/Button";
import NotFoundIcon from "@icons/not-found.svg?react";

type BookContextType = BookType | null;
const BookContext = createContext<BookContextType>(null);

const useBook = () => {
  const context = useContext(BookContext);
  if (!context) {
    throw new Error("Components book should be inside <Book>");
  }
  return context;
};

const Image: FC<HTMLAttributes<SVGSVGElement>> = (props) => {
  return <NotFoundIcon className="fill-primary size-auto" {...props} />;
};

const Title: FC<HTMLAttributes<HTMLHeadingElement>> = (props) => {
  const book = useBook();
  return (
    <h3 className="max-w-80 truncate mb-5" {...props}>
      {props.children || book.title}
    </h3>
  );
};

const ReadButton: FC<HTMLAttributes<HTMLButtonElement>> = (props) => {
  const book = useBook();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`${PagesEndponts.BOOK}/${book.id}`);
  };

  return (
    <Button
      className="bg-green-500 text-white rounded-md self-end px-2 py-1"
      handleClick={handleClick}
      {...props}
    >
      {props.children || <p>Read</p>}
    </Button>
  );
};

type BookProps = {
  book: BookType;
  children: ReactNode;
} & Omit<HTMLAttributes<HTMLLIElement>, "children">;

type BookCompoundComponent = FC<BookProps> & {
  Image: FC<HTMLAttributes<SVGSVGElement>>;
  Title: FC<HTMLAttributes<HTMLHeadingElement>>;
  ReadButton: FC<HTMLAttributes<HTMLButtonElement>>;
};

export const Book: BookCompoundComponent = ({ book, children, ...liProps }) => {
  return (
    <BookContext.Provider value={book}>
      <li
        className="flex flex-col p-3 border-2 rounded-2xl border-primary"
        {...liProps}
      >
        {children}
      </li>
    </BookContext.Provider>
  );
};

Book.Image = Image;
Book.Title = Title;
Book.ReadButton = ReadButton;
