import styled, { css } from "styled-components";
import { Col2, Col8, StyledRow } from "./Row";
import Avatar from "./Avatar";
import src from "../../public/hinhanh/iuh_logo_2.png";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { useMobile } from "../context/MobileContext";
const SERVER = import.meta.env.PROD
  ? import.meta.env.VITE_SERVER_URL
  : import.meta.env.VITE_SERVER_URL_LOCAL;
const NavVar = css`
  --bs-navbar-padding-x: 0;
  --bs-navbar-padding-y: 0.5rem;
`;

function Navbar({ user }) {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const isMobile = useMobile();
  return (
    <div className="nav">
      <StyledRow>
        <Col2>
          <div className="nav-logo">
            <NavLink to="#">
              <img src={src} alt="logo" />
              <span>IUH</span>
            </NavLink>
          </div>
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

          <ul className="menu" isOpen={menuOpen}>
            <li>
              <NavLink to="trangChu">Trang chủ</NavLink>
            </li>
            <li>
              {user?.doAn ? (
                <NavLink to="quanLyDoAn">Quản lý khóa luận</NavLink>
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
          </ul>
        </Col8>
        <Col2 style={{ position: "relative" }}>
          <div
            className="avatar-box"
            onClick={() => setToggleDropdown((prev) => !prev)}
          >
            <Avatar src={`${SERVER}${user.hinhAnh}`} alt="Ảnh đại diện" />
          </div>
          {toggleDropdown && (
            <div className="menu-dropdown">
              <ul>
                <li className="mt-2 p-1 hover-secondary">
                  <Link to={"/sinhVien/thongTinTaiKhoan"}>
                    Thông tin tài khoản
                  </Link>
                </li>
                <li className="mt-2 p-1 hover-secondary">
                  <Link to={"/logout"}>Đăng xuất</Link>
                </li>
              </ul>
            </div>
          )}
        </Col2>
      </StyledRow>
    </div>
  );
}

export default Navbar;
