import styled, { css } from "styled-components";
import { Col10, Col2, Col8, Col9, StyledRow } from "./Row";
import Avatar from "./Avatar";
import src from "../../public/hinhanh/iuh_logo_2.png";
import avatarSrc from "../../public/hinhanh/avatar_1.png";
import { Link, NavLink } from "react-router-dom";
import UseUser from "../context/UseUser";
import { useState } from "react";
import { useMobile } from "../context/MobileContext";

const NavVar = css`
  --bs-navbar-padding-x: 0;
  --bs-navbar-padding-y: 0.5rem;
`;

const StyledNav = styled.nav`
  ${NavVar}
  width: 100%;
  background-color: rgba(255, 255, 255, 0.88) !important;
  color: #2f2b3d;
  z-index: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--bs-navbar-padding-y) var(--bs-navbar-padding-x);
  position: relative;
  & > div {
    width: 95%;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem;
    & > div {
      width: 100%;
    }
  }
`;

const StyledNavLogo = styled.div`
  margin-right: 1rem;
  display: flex;
  align-items: center;
  color: #444050;
  height: 100%;
  align-items: center;
  & > a {
    display: flex;
    align-items: center;
    text-decoration: none;
    & > img {
      width: 34px;
      height: 24px;
    }
  }

  @media (max-width: 768px) {
    justify-content: center;
    margin-bottom: 1rem;
  }
`;

const StyledAvatarBox = styled.div`
  display: flex;
  justify-content: end;
  height: 100%;
  align-items: center;

  @media (max-width: 768px) {
    order: -1;
    width: 100%;
    justify-content: center;
    margin-bottom: 1rem;
  }
`;

const StyledMenu = styled.ul`
  width: 100%;
  height: 100%;
  padding-right: 1.6rem;
  display: flex;
  gap: 1.6rem;
  justify-content: space-between;
  align-items: center;
  & > li {
    width: max-content;
  }

  & a {
    padding: 15px;
    width: 100%;
    &.active {
      box-shadow: 0 -2px 0 #7367f0 inset;
      color: #7367f0;
      font-weight: 500;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    width: 70%;
    height: max-content;
    z-index: 100;
    background-color: white;
    margin: auto;
    padding: 1rem;
    position: absolute;
    & > li {
      width: 100%;
    }
    & a {
      display: block;
      padding: 0px;
      padding-bottom: 0px;
    }
  }
`;

const SyledMenuDropDowm = styled.div`
  position: absolute;
  padding: 0.5rem;
  background-color: var(--bs-white);
  box-shadow: var(--bs-box-shadow-sm);
  z-index: 100;
  right: 0;
`;

function Navbar({ user }) {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const isMobile = useMobile();
  return (
    <StyledNav>
      <StyledRow>
        <Col2>
          <StyledNavLogo>
            <NavLink to="#">
              <img src={src} alt="logo" />
              <span>IUH</span>
            </NavLink>
          </StyledNavLogo>
        </Col2>
        <Col8>
          {isMobile ? (
            <div
              className="text-center justify-center flex "
              style={{ height: "100%" }}
            >
              <button
                onClick={() => setMenuOpen((prev) => !prev)}
                style={{
                  fontSize: "1.5rem",
                  cursor: "pointer",
                  background: "none",
                  border: "none",
                }}
              >
                ☰
              </button>
            </div>
          ) : (
            ""
          )}

          <StyledMenu isOpen={menuOpen}>
            <li>
              <NavLink to="trangChu">Trang chủ</NavLink>
            </li>
            <li>
              {user?.doAn ? (
                <NavLink to="quanLyDoAn">Quản lý đồ án</NavLink>
              ) : (
                <NavLink to="dangKyDeTai">Đăng ký đề tài</NavLink>
              )}
            </li>
            <li>
              {user?.thucTap ? (
                <NavLink to="quanLyThucTap">Quản lý thực tập</NavLink>
              ) : (
                <NavLink to="dangKyThucTap">Đăng ký thực tập</NavLink>
              )}
            </li>
            <li>
              <NavLink to="lichhop">Lịch họp</NavLink>
            </li>
            <li>
              <NavLink to="chat">Trò chuyện</NavLink>
            </li>
          </StyledMenu>
        </Col8>
        <Col2 style={{ position: "relative" }}>
          <StyledAvatarBox onClick={() => setToggleDropdown((prev) => !prev)}>
            <Avatar src={avatarSrc} />
          </StyledAvatarBox>
          {toggleDropdown && (
            <SyledMenuDropDowm>
              <ul>
                <li className="mt-2 p-1 hover-secondary">
                  <Link>Thông tin tài khoản</Link>
                </li>
                <li className="mt-2 p-1 hover-secondary">
                  <Link to={"/logout"}>Đăng xuất</Link>
                </li>
              </ul>
            </SyledMenuDropDowm>
          )}
        </Col2>
      </StyledRow>
    </StyledNav>
  );
}

export default Navbar;
