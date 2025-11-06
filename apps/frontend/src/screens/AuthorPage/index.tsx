import { FC } from "react";
import { MainContentWrapper } from "@wrappers/MainContentWrapper";
import "swiper/css";
import { useQuery } from "@tanstack/react-query";
import { ServiceNames } from "@enums/serviceNames";
import { Queries } from "@enums/queriesKeys";
import { useNavigate, useParams } from "react-router";
import { Button } from "@ui/Button";
import { PagesEndponts } from "@enums/pagesEndpoints";
import { authorService } from "@services/author-service";
import { AuthorResponse } from "@shared-types/library/author-request";

export const AuthorPage: FC = () => {
  const { getAuthor } = authorService(ServiceNames.AUTHOR);

  const params = useParams();
  const authorId = Number(params.authorId);

  const {
    data: authorInfo,
    isSuccess,
    isLoading,
  } = useQuery<AuthorResponse>({
    queryKey: [Queries.AUTHOR, authorId],
    queryFn: () => getAuthor(authorId),
  });

  const navigate = useNavigate();

  const visitAuthorBooks = (bookId: number) => {
    navigate(`${PagesEndponts.BOOK}/${bookId}`);
  };

  return (
    <MainContentWrapper>
      {isLoading && <div>Content is loading</div>}
      {isSuccess && (
        <div className="mx-20 my-10 flex flex-col gap-5">
          <h2>Author books: {authorInfo.name}</h2>
          <ul>
            {authorInfo.books.map((book) => (
              <li key={book.id}>
                <Button
                  handleClick={() => {
                    visitAuthorBooks(book.id);
                  }}
                >
                  Book Title: {book.title}
                </Button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </MainContentWrapper>
  );
};
