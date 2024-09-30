import styled from "styled-components";
import GiangVienAside from "./GiangVienAside";
import { Outlet } from "react-router-dom";
import UseUser from "../context/UseUser";

const GiangvienLayoutSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const StyledCotent = styled.div`
  display: flex;
  flex: 1 1 auto;
  align-items: stretch;
  flex-basis: 100%;
  flex-direction: column;
  padding: 0;
  padding-top: 10px !important;
  padding-left: 16.25rem;
  max-width: 100%;
`;
function GiangVIenLayout() {
  const { data, isLoading, isAuthenticated } = UseUser();
  const user = data?.user;

  if (isLoading || !isAuthenticated) {
    return null; // Return null or a loader while checking authentication
  }
  return (
    <GiangvienLayoutSection>
      <GiangVienAside user={user} />
      <StyledCotent>
        <div className="ml-3 mr-2">
          <Outlet />
        </div>
      </StyledCotent>
    </GiangvienLayoutSection>
  );
}

export default GiangVIenLayout;
