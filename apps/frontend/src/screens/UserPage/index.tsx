import { useAppSelector } from "@hooks/core/redux";
import { userSelector } from "@stores/selectors/userSelector";
import { MainContentWrapper } from "@wrappers/MainContentWrapper";
import { FC } from "react";

export const UserPage: FC = () => {
  const user = useAppSelector(userSelector);

  return (
    <MainContentWrapper>
      <ul>
        {Object.entries(user).map((values) => (
          <li key={values[0]}>
            {values[0]}:{String(values[1])}
          </li>
        ))}
      </ul>
    </MainContentWrapper>
  );
};
