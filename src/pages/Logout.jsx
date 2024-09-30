import { useQuery, useQueryClient } from "@tanstack/react-query";
import styled from "styled-components";
import { logOut } from "../services/AuthApi";
import toast from "react-hot-toast";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const StyledDiv = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  vertical-align: center;
  align-items: center;
  justify-content: center;
`;

function Logout() {
  const queryClient = useQueryClient();
  const { data, isLoading, isSuccess } = useQuery({
    queryFn: logOut,
  });
  const navigate = useNavigate();
  useEffect(() => {
    if (isSuccess && data?.message) {
      toast.success(data.message);
      localStorage.clear();
      queryClient.removeQueries();

      navigate("/login");
    }
  }, [isSuccess, data?.message]); // Only runs when query is successful and message is available

  return (
    <StyledDiv>
      <p>Logging out...</p>
    </StyledDiv>
  );
}

export default Logout;
