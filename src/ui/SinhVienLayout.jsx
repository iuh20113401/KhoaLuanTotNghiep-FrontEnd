import styled from "styled-components";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import UseUser from "../context/UseUser";
import LoadingSpinner from "./Spinner";
const SinhVienLayoutSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;
const Main = styled.article`
  min-height: 80vh;
  width: 98%;
  margin: auto;
`;
const LoadingScreen = styled.div`
  width: 100vw;
  height: 100vh;
`;
function SinhVienLayout() {
  const { data, isLoading } = UseUser();
  const user = data?.user;

  if (isLoading) {
    return (
      <LoadingScreen>
        <LoadingSpinner />
      </LoadingScreen>
    );
  }
  return (
    <SinhVienLayoutSection>
      <Navbar user={user} />
      <Main>
        <Outlet />
      </Main>
    </SinhVienLayoutSection>
  );
}

export default SinhVienLayout;
