import { useQuery } from "@tanstack/react-query";
import { getMe } from "../services/AuthApi";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function UseUser() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  const { data, isLoading, refetch, error } = useQuery({
    queryKey: ["user"],
    queryFn: getMe,
    enabled: !!token,
    onError: (err) => {
      if (err.response?.status === 401) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/login");
      }
    },
    staleTime: 5 * 60 * 1000,
  });

  return { data, isLoading, refetch, error, isAuthenticated: !!token };
}

export default UseUser;
