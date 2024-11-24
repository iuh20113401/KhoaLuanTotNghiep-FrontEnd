import { useQuery } from "@tanstack/react-query";
import { getMe } from "../services/AuthApi";
import { useNavigate } from "react-router-dom";

function UseUser() {
  const navigate = useNavigate();
  // Check if JWT exists before making the server call
  const { data, isLoading, refetch, error } = useQuery({
    queryKey: ["user"],
    queryFn: getMe,
    staleTime: 5 * 60 * 1000,
    retry: (failureCount, error) => {
      if (error.status === 401) {
        navigate("/login");
        return false;
      }
      return failureCount < 3;
    },
    retryOnMount: 3,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 3000),
  });

  return { data, isLoading, refetch, error };
}

export default UseUser;
