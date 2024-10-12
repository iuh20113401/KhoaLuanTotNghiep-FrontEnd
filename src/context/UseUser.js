import { useQuery } from "@tanstack/react-query";
import { getMe } from "../services/AuthApi";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function UseUser() {
  const navigate = useNavigate();
  // Check if JWT exists before making the server call
  const { data, isLoading, refetch, error } = useQuery({
    queryKey: ["user"],
    queryFn: getMe,
    onError: (err) => {
      if (err.response?.status === 401) {
        navigate("/login"); // Redirect to login if unauthorized (e.g., token expired)
      }
    },
    staleTime: 5 * 60 * 1000,
    retry: 3,
    retryOnMount: 3,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 3000),
  });

  return { data, isLoading, refetch, error };
}

export default UseUser;
