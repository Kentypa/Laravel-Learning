import { Queries } from "@enums/queriesKeys";
import { testService } from "@services/test-service";
import { useQuery } from "@tanstack/react-query";

export const useHomeMessage = () => {
  const { getTestMessage } = testService("");
  const { ...otherOptions } = useQuery<{ message: string }>({
    queryKey: [Queries.AUTH],
    queryFn: getTestMessage,
  });

  return { ...otherOptions };
};
