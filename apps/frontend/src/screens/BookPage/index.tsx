import { FC } from "react";
import { MainContentWrapper } from "@wrappers/MainContentWrapper";
import "swiper/css";
import { useQuery } from "@tanstack/react-query";
import { bookService } from "@services/book-service";
import { ServiceNames } from "@enums/serviceNames";
import { Queries } from "@enums/queriesKeys";
import { useParams } from "react-router";
import { Book } from "@shared-types/library/book";

export const BookPage: FC = () => {
  const { getBook } = bookService(ServiceNames.BOOKS);

  const params = useParams();
  const bookId = Number(params.bookId);

  const {
    data: book,
    isSuccess,
    isLoading,
  } = useQuery<Book>({
    queryKey: [Queries.BOOKS, bookId],
    queryFn: () => getBook(bookId),
  });

  return (
    <MainContentWrapper>
      {isLoading && <div>Content is loading</div>}
      {isSuccess && (
        <div className="mx-20 my-10 flex flex-col gap-5">
          <h2>Book Title: {book.title}</h2>
          <ul>
            {book.authors.map((author) => (
              <li key={author.id}>Author Name: {author.name}</li>
            ))}
          </ul>
        </div>
      )}
    </MainContentWrapper>
  );
};
