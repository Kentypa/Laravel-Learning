import { Queries } from "@enums/queriesKeys";
import { ServiceNames } from "@enums/serviceNames";
import {
  changeIsAuthenticated,
  changeAuthLoading,
  changeByData,
} from "@stores/user/userSlice";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useAppDispatch } from "@hooks/core/redux";
import { userService } from "@services/user-service";
import { UserData } from "@shared-types/auth/user-data";

export const useInitializationUser = () => {
  const dispatch = useAppDispatch();
  const { getUser } = userService(ServiceNames.AUTH);

  const { isSuccess, isError, data, ...otherOptions } = useQuery<UserData>({
    queryKey: [Queries.USER],
    queryFn: getUser,
    refetchOnWindowFocus: false,
    retry: 1,
  });

  useEffect(() => {
    if (isSuccess) {
      dispatch(changeIsAuthenticated(true));
      dispatch(changeAuthLoading(false));
      dispatch(changeByData(data));
    }

    if (isError) {
      dispatch(changeIsAuthenticated(false));
      dispatch(changeAuthLoading(false));
    }
  }, [dispatch, isError, isSuccess, data]);

  return { isSuccess, isError, ...otherOptions };
};
