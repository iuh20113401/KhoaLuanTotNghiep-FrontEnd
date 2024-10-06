import styled from "styled-components";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import UseUser from "../context/UseUser";
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
function SinhVienLayout() {
  const { data, isLoading } = UseUser();
  const user = data?.user;

  if (isLoading) {
    return null; // Return null or a loader while checking authentication
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
