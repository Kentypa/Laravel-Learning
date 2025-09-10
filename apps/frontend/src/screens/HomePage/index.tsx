import { FC } from "react";
import { MainContentWrapper } from "@wrappers/MainContentWrapper";
import { useHomeMessage } from "@features/HomePage/hooks/useHomeMessage";
import "swiper/css";

export const HomePage: FC = () => {
  const { data, isSuccess } = useHomeMessage();

  console.log(data);
  return (
    <MainContentWrapper>
      {isSuccess && <p>Message: {data.message}</p>}
      {data?.message}
    </MainContentWrapper>
  );
};
