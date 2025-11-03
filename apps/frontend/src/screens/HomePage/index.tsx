import { FC } from "react";
import { MainContentWrapper } from "@wrappers/MainContentWrapper";
import "swiper/css";
import { useQuery } from "@tanstack/react-query";
import { bookService } from "@services/book-service";
import { ServiceNames } from "@enums/serviceNames";
import { Books } from "@shared-types/library/books";
import { Queries } from "@enums/queriesKeys";
import { BooksList } from "@features/HomePage/components/BooksList";
import { useSearchParams, useNavigate } from "react-router";
import { Button } from "@ui/Button";

export const HomePage: FC = () => {
  const { getBooks } = bookService(ServiceNames.BOOKS);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const page = Number(searchParams.get("page")) || 1;
  const per_page = 5;

  const {
    data: books,
    isSuccess,
    isLoading,
  } = useQuery<Books>({
    queryKey: [Queries.BOOKS, page],
    queryFn: () => getBooks(page, per_page),
  });

  const totalPages = books?.last_page ?? 1;

  const goToPage = (newPage: number) => {
    navigate(`?page=${newPage}`);
  };

  return (
    <MainContentWrapper>
      {isLoading && <div>Content is loading</div>}
      {isSuccess && (
        <>
          <BooksList books={books} />
          <div className="flex justify-center gap-2 my-6">
            <Button
              handleClick={() => goToPage(page - 1)}
              disabled={page <= 1}
              className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
            >
              Prev
            </Button>
            <span className="px-3 py-1 font-semibold">
              Page {page} of {totalPages}
            </span>
            <Button
              handleClick={() => goToPage(page + 1)}
              disabled={page >= totalPages}
              className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
            >
              Next
            </Button>
          </div>
        </>
      )}
    </MainContentWrapper>
  );
};
