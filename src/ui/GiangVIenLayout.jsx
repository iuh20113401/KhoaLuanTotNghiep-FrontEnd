import styled from "styled-components";
import GiangVienAside from "./GiangVienAside";
import { Outlet } from "react-router-dom";
import UseUser from "../context/UseUser";
import { useState, useEffect } from "react";
import { BiChevronRight } from "react-icons/bi";
import { useMobile } from "../context/MobileContext";

const GiangvienLayoutSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const StyledContent = styled.div`
  display: flex;
  flex: 1;
  align-items: stretch;
  flex-direction: column;
  padding: 0;
  padding-top: 10px;
  padding-left: ${({ isAsideHidden }) => (isAsideHidden ? "0" : "16.25rem")};
  max-width: 100%;
  transition: padding 0.3s;

  @media (max-width: 768px) {
    padding-left: 0; /* Reset padding for mobile view */
  }
`;

const StyledShowToggle = styled.div`
  position: ${({ isMobile }) => (isMobile ? "fixed" : "absolute")};
  top: ${({ isMobile }) => (isMobile ? "10px" : "50%")};
  left: ${({ isMobile }) => (isMobile ? "10px" : "0")};
  transform: translateY(-50%);
  background-color: #333;
  color: white;
  padding: 0.5rem;
  border-radius: 5px;
  cursor: pointer;
  z-index: 10;
  display: ${({ isAsideHidden }) => (isAsideHidden ? "block" : "none")};

  @media (max-width: 768px) {
    top: 35%;
    left: 10px;
  }
`;

const GiangVienAsideStyled = styled(GiangVienAside)`
  position: ${({ isMobile }) => (isMobile ? "fixed" : "relative")};
  top: 0;
  left: 0;
  width: ${({ isMobile }) => (isMobile ? "100%" : "16.25rem")};
  height: 100%;
  background-color: #f5f5f5;
  z-index: 20;
  display: ${({ isAsideHidden }) => (isAsideHidden ? "none" : "block")};

  @media (max-width: 768px) {
    display: ${({ isAsideHidden }) => (isAsideHidden ? "none" : "block")};
  }
`;

const Overlay = styled.div`
  display: ${({ isMobile, isAsideHidden }) =>
    isMobile ? (isAsideHidden ? "none" : "block") : "none"};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  z-index: 15;
`;

function GiangVIenLayout() {
  const { data, isLoading } = UseUser();
  const [isAsideHidden, setIsAsideHidden] = useState(false);
  const isMobile = useMobile();
  const user = data?.user;

  if (isLoading) {
    return null; // Return null or loader while checking authentication
  }

  const toggleAside = () => {
    setIsAsideHidden((prev) => !prev);
  };

  return (
    <GiangvienLayoutSection>
      <GiangVienAsideStyled
        user={user}
        toggleAside={toggleAside}
        isAsideHidden={isAsideHidden}
        isMobile={isMobile}
      />
      <StyledShowToggle
        isAsideHidden={isAsideHidden}
        onClick={toggleAside}
        isMobile={isMobile}
      >
        <BiChevronRight /> {/* Toggle arrow */}
      </StyledShowToggle>
      <Overlay
        isMobile={isMobile}
        isAsideHidden={isAsideHidden}
        onClick={toggleAside}
      />
      <StyledContent isAsideHidden={isAsideHidden}>
        <div className="ml-3 mr-2">
          <Outlet />
        </div>
      </StyledContent>
    </GiangvienLayoutSection>
  );
}

export default GiangVIenLayout;
