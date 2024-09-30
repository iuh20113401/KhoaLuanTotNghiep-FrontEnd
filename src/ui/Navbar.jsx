import styled, { css } from "styled-components";
import { Col10, Col2, Col8, Col9, StyledRow } from "./Row";
import Avatar from "./Avatar";
import src from "../../public/hinhanh/iuh_logo_2.png";
import avatarSrc from "../../public/hinhanh/avatar_1.png";
import { Link, NavLink } from "react-router-dom";
import UseUser from "../context/UseUser";
import { useState } from "react";
const NavVar = css`
  --bs-navbar-padding-x: 0;
  --bs-navbar-padding-y: 0.5rem;
  --bs-navbar-color: rgba(47, 43, 61, 0.5);
  --bs-navbar-hover-color: #6d6b77;
  --bs-navbar-disabled-color: rgba(47, 43, 61, 0.3);
  --bs-navbar-active-color: #6d6b77;
  --bs-navbar-brand-padding-y: 0.50053125rem;
  --bs-navbar-brand-margin-end: 1rem;
  --bs-navbar-brand-font-size: 1rem;
  --bs-navbar-brand-color: #6d6b77;
  --bs-navbar-brand-hover-color: #6d6b77;
  --bs-navbar-nav-link-padding-x: 0.5rem;
  --bs-navbar-toggler-padding-y: 0.5rem;
  --bs-navbar-toggler-padding-x: 0.7rem;
  --bs-navbar-toggler-font-size: 0.625rem;

  --bs-navbar-toggler-border-color: rgba(47, 43, 61, 0.06);
  --bs-navbar-toggler-border-radius: var(--bs-border-radius);
  --bs-navbar-toggler-focus-width: 0.05rem;
  --bs-navbar-toggler-transition: box-shadow 0.15s ease-in-out;
`;
const StyledNav = styled.nav`
  ${NavVar}
  width: 99%;
  background-color: rgba(255, 255, 255, 0.88) !important;
  color: #2f2b3d;
  z-index: auto;
  --bs-bg-opacity: 1;
  flex-wrap: nowrap;
  justify-content: flex-start;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: var(--bs-navbar-padding-y) var(--bs-navbar-padding-x);
  & > div {
    width: 100%;
    display: flex;
    flex-wrap: inherit;
    align-items: center;
    padding-right: 3rem;
    padding-left: 1.5rem;
  }
`;
const StyledNavLogo = styled.div`
  margin-right: 1rem !important;
  display: flex !important;
  color: #444050;
  flex-grow: 0;
  flex-shrink: 0;
  overflow: hidden;
  line-height: 1;
  min-height: 1px;
  align-items: center;
  padding-top: 0 !important;
  padding-bottom: 0 !important;
  & > a {
    display: flex;
    align-items: center;
    text-decoration: none;
    & > img {
      align-items: center;
      -ms-flex-pack: center;
      justify-content: center;
      display: -ms-flexbox;
      display: flex;
      width: 34px;
      height: 24px;
      display: block;
      vertical-align: middle;
    }
  }
`;
const StyledAvatarBox = styled.div`
  display: flex;
  justify-content: end;
`;
const SyledMenuDropDowm = styled.div`
  position: absolute;
  padding: 0.5rem;
  bottom: 100;
  right: 0;
  background-color: var(--bs-white);
  box-shadow: var(--bs-box-shadow-sm);
  z-index: 100;
`;
const StyledMenu = styled.ul`
  width: 100%;
  display: flex;
  gap: 1.6rem;
  justify-content: space-between;
  padding-right: 1.6rem;
  & > li {
    width: max-content;
  }
  & a {
    padding: 15px;
    padding-bottom: 20px;
    width: 100%;
    &.active {
      box-shadow: 0 -2px 0 #7367f0 inset;
      background-color: rgba(0, 0, 0, 0);
      color: #7367f0;
      font-weight: 500;
    }
  }
`;
function Navbar({ user }) {
  const [toggleDropdown, setToggleDropdown] = useState(false);

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
          <StyledMenu>
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
                <NavLink to="dangKyThucTap">Đăng ký thục tập</NavLink>
              )}
            </li>
            <li>
              <NavLink to="lichhop">Lịch họp</NavLink>{" "}
            </li>
            <li>
              <NavLink to="chat">Trò chuyện</NavLink>
            </li>
          </StyledMenu>
        </Col8>
        <Col2 style={{ position: "relative" }}>
          <StyledAvatarBox
            onClick={() =>
              setToggleDropdown((toggleDropdown) => !toggleDropdown)
            }
          >
            <Avatar src={avatarSrc} />
          </StyledAvatarBox>
          {toggleDropdown && (
            <SyledMenuDropDowm>
              <ul>
                <li className="mt-2 p-1 hover-secondary">
                  <Link>Thông tin tài khoản</Link>
                </li>
                <li className="mt-2 p-1  hover-secondary">
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
