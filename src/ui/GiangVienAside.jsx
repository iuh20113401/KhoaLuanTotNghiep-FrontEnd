import styled, { css } from "styled-components";
import { ColLg, StyledRow } from "./Row";
import { HiOutlineHome, HiViewList } from "react-icons/hi";
import { useState } from "react";
import Logo from "../../public/hinhanh/iuh_logo_2.png";
import { Link, NavLink } from "react-router-dom";
import { FiCircle } from "react-icons/fi";
const SERVER = import.meta.env.PROD
  ? import.meta.env.VITE_SERVER_URL
  : import.meta.env.VITE_SERVER_URL_LOCAL;
const StyledAside = styled.aside`
  display: flex;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  margin-right: 0 !important;
  margin-left: 0 !important;
  z-index: 100;
  touch-action: none;
  user-select: none;
  -webkit-user-drag: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  transition: width 0.3s;
  box-shadow: 0 0.125rem 0.5rem 0 rgba(47, 43, 61, 0.12);
  background-color: #fff !important;
  color: #444050;
  flex: 1 0 auto;
  width: 16.25rem;

  flex-direction: column;
`;
const NavLogo = styled.div`
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
  display: flex;
  width: 70px;
  height: 55px;
  flex-grow: 0;
  flex-shrink: 0;
  overflow: hidden;
  & > img {
    width: 70px;
    height: 55px;
  }
`;
const FooterLogo = styled.div`
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
  display: flex;
  width: 50px;
  height: 35px;
  flex-grow: 0;
  flex-shrink: 0;
  overflow: hidden;
  & > img {
    width: 30px;
    height: 30px;
    border-radius: 100%;
  }
`;
const LogoLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  & > div > span {
    flex-shrink: 0;
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
    font-weight: 700 !important;
    font-size: 2rem;
    color: #444050;
    color: transparent;
    background: var(--bs-primary);

    background-clip: text;
  }
`;
const FooterLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  position: relative;
  & > div > span {
    flex-shrink: 0;
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
    font-weight: 400 !important;
    font-size: 1rem;
    background-clip: text;
  }
  & > ul {
    position: absolute;
    padding: 0.5rem;
    bottom: 0%;
    left: 100%;
    width: 100%;
    background-color: var(--bs-white);
    box-shadow: var(--bs-box-shadow-sm);
    z-index: 100;
  }
`;
const IconLink = styled.a`
  transition: opacity 0.3s ease-in-out;
  font-size: 1.5rem;
  cursor: pointer;
`;
const StyledMenuList = styled.ul`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 0;
  padding: 0;
  height: 100%;
  flex-direction: column;
  flex: 1 1 auto;
  padding-top: 0.25rem !important;
  padding-bottom: 0.25rem !important;
  position: relative;
  overflow-y: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
  &:hover::-webkit-scrollbar {
    display: block;
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--bs-primary);
  }
`;
const StyledMenuItem = styled.li`
  width: 16.25rem;
  margin: 0.375rem 0 0;
  flex: 0 0 auto;
  flex-direction: column;
  padding: 0;
  list-style: none;
  cursor: pointer;
  &::before {
    content: "";
    position: absolute;
    right: 0;
    width: 0.25rem;
    height: 2.6845rem;
    border-radius: 0.375rem 0 0 0.375rem;
  }
  &.active > a:not(.menu-toggle) {
    background: var(--bs-primary);
    color: var(--bs-white);
  }
`;
const StyledMenuToggle = css`
  &.menu-toggle {
    & + ul {
      display: none;
    }
    &.open + ul {
      display: block;
    }
    &.open {
      background: rgba(47, 43, 61, 0.08);
    }
    &::after {
      content: "\\00a0\\276F";
      color: #444050;
      right: 0.75rem;
      transition-duration: 0.3s;
      transition-property: -webkit-transform, transform;
      position: absolute;
      top: 50%;
      display: block;
      font-family: "tabler-icons";
      font-size: 1.375rem;
      transform: translateY(-50%);
    }
  }
`;
const StyledItemLink = styled(NavLink)`
  display: flex;
  align-items: center;
  border-radius: 0.375rem;
  color: #444050;
  margin: 0 0.75rem;
  padding: 0.5rem 0.75rem;
  padding-right: calc(0.75rem + 1.76em);
  font-size: 0.9375rem;
  min-height: 38px;
  transition-duration: 0.3s;
  transition-property: color, background-color;
  position: relative;
  &:not(.menu-toggle).active {
    background: var(--bs-primary);
    color: var(--bs-white);
  }
  &:hover {
    background: rgba(47, 43, 61, 0.08);
  }
  &.small > svg {
    font-size: 0.7rem;
  }
  & > svg {
    font-family: "tabler-icons" !important;
    vertical-align: middle;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    flex-grow: 0;
    flex-shrink: 0;
    margin-right: 0.5rem;
    line-height: 1;
    font-size: 1.375rem;
    width: 1.375rem;
    transition: margin-right 0.3s ease;
  }
  & > span {
    font-size: 0.9375rem;
    text-align: -webkit-match-parent;
  }
  ${StyledMenuToggle}
`;
function GiangVienAside({ user }) {
  const [toggleDropdown, setToggleDropdown] = useState(false);

  return (
    <StyledAside>
      <StyledRow>
        <LogoLink href="#">
          <StyledRow className="p-2 align-center">
            <NavLogo>
              <img src={Logo} alt="logo iuh" />
            </NavLogo>
            <span>IUH</span>
          </StyledRow>
        </LogoLink>
        <ColLg className="text-end pr-2 pt-1 align-center justify-end flex">
          <IconLink>
            <HiViewList />
          </IconLink>
        </ColLg>
      </StyledRow>
      <StyledMenuList>
        <MenuItem
          icon={<HiOutlineHome />}
          title="Dashboard"
          href={"./trangchu"}
        />
        <MenuItem
          icon={<HiOutlineHome />}
          title="Thông báo"
          href={"./thongBao"}
        />
        <MenuItem
          icon={<HiOutlineHome />}
          title="Quản lý đề tài"
          href={"./quanlydetai"}
        />
        <ToggleItem title={"Quản lý đồ án"} icon={<HiOutlineHome />}>
          <StyledMenuList>
            <MenuItem
              icon={<FiCircle />}
              title="Danh sách sinh viên"
              href={"./doAn/danhsachsinhvien"}
              isSmall={true}
            />
            <MenuItem
              icon={<FiCircle />}
              title="Danh sách đồ án"
              href={"./doAn/danhsachdoan"}
              isSmall={true}
            />
            <MenuItem
              icon={<FiCircle />}
              title="Chấm điểm đồ án"
              href={"./doAn/chamdiemdoan"}
              isSmall={true}
            />
            <MenuItem
              icon={<FiCircle />}
              title="Điểm danh"
              href={"./doAn/diemdanhdoan"}
              isSmall={true}
            />
          </StyledMenuList>
        </ToggleItem>
        <ToggleItem title={"Quản lý thực tập"} icon={<HiOutlineHome />}>
          <StyledMenuList>
            <MenuItem
              icon={<FiCircle />}
              title="Danh sách sinh viên"
              href={"./thucTap/DanhSachSinhVien"}
              isSmall={true}
            />
            <MenuItem
              icon={<FiCircle />}
              title="Danh sách báo cáo"
              href={"./thucTap/DanhSachBaoCao"}
              isSmall={true}
            />
            <MenuItem
              icon={<FiCircle />}
              title="Chấm điểm thực tập"
              href={"./thucTap/chamDiem"}
              isSmall={true}
            />
            <MenuItem
              icon={<FiCircle />}
              title="Điểm danh"
              href={"./thucTap/DiemDanh"}
              isSmall={true}
            />
          </StyledMenuList>
        </ToggleItem>
        <MenuItem
          icon={<HiOutlineHome />}
          title="Hướng dẫn"
          href={"./huongdan"}
        />
        <MenuItem
          icon={<HiOutlineHome />}
          title="Lịch họp"
          href={"./lichhop"}
        />
        <MenuItem
          icon={<HiOutlineHome />}
          title="Trò chuyện"
          href={"./trochuyen"}
        />
        <MenuItem
          icon={<HiOutlineHome />}
          title="Chấm điểm phản biện"
          href={"./chamdiemphanbien"}
        />
        <MenuItem
          icon={<HiOutlineHome />}
          title="Chấm điểm hội đồng"
          href={"./chamdiemhoidong"}
        />
        {/* phụ trách môn học */}
        {user.vaiTro === 2 && (
          <div>
            <h5 className="text-primary p-3 ">Chủ nhiệm bộ môn</h5>{" "}
            <MenuItem
              icon={<HiOutlineHome />}
              title="Thông tin đồ án"
              href={"./quanlythongtindoan"}
            />
            <MenuItem
              icon={<HiOutlineHome />}
              title="Tiêu chí đánh giá"
              href={"./quanLyTieuChi"}
            />
          </div>
        )}
        {/* chủ nhiệm bộ môn */}
        {user.vaiTro === 3 && (
          <div>
            <h5 className="text-primary p-3 ">Chủ nhiệm bộ môn</h5>{" "}
            <MenuItem
              icon={<HiOutlineHome />}
              title="Tạo thông báo"
              href={"./TaoThongBao"}
            />
            <ToggleItem title={"Quản lý sinh viên"} icon={<HiOutlineHome />}>
              <StyledMenuList>
                <MenuItem
                  icon={<FiCircle />}
                  title="Thông tin sinh viên"
                  href={"./xemthongtinsinhvien"}
                  isSmall={true}
                />
                <MenuItem
                  icon={<FiCircle />}
                  title="Thông tin thực tập"
                  href={"./quanlythongtinthuctap"}
                  isSmall={true}
                />
                <MenuItem
                  icon={<FiCircle />}
                  title="Thông tin đồ án"
                  href={"./quanlythongtindoan"}
                  isSmall={true}
                />
              </StyledMenuList>
            </ToggleItem>
            <MenuItem
              icon={<HiOutlineHome />}
              title="Duyệt đề tài"
              href={"./duyetdetai"}
            />
            <ToggleItem title={"Phân công"} icon={<HiOutlineHome />}>
              <StyledMenuList>
                <MenuItem
                  icon={<HiOutlineHome />}
                  title="Giảng viên phản biện"
                  href={"./phanconggiangvienphanbien"}
                />
                <MenuItem
                  icon={<HiOutlineHome />}
                  title="Giảng viên hội đồng"
                  href={"./phanconggiangvienhoidong"}
                />
                <MenuItem
                  icon={<HiOutlineHome />}
                  title="Giảng viên thực tấp"
                  href={"./phanconggiangviengiamsat"}
                />
              </StyledMenuList>
            </ToggleItem>
          </div>
        )}
      </StyledMenuList>
      <StyledRow>
        <FooterLink href="#">
          <StyledRow
            className="p-2 align-center"
            onClick={() =>
              setToggleDropdown((toggleDropdown) => !toggleDropdown)
            }
          >
            <FooterLogo>
              <img src={`${SERVER}${user.hinhAnh}`} alt="logo iuh" />
            </FooterLogo>
            <span>{user.hoTen}</span>
          </StyledRow>
          {toggleDropdown && (
            <ul>
              <li className="mt-2 p-1 hover-secondary">
                <Link>Thông tin tài khoản</Link>
              </li>
              <li className="mt-2 p-1  hover-secondary">
                <Link to={"/logout"}>Đăng xuất</Link>
              </li>
            </ul>
          )}
        </FooterLink>
      </StyledRow>
    </StyledAside>
  );
}

function ToggleItem({ title, icon, children }) {
  const [open, setOpen] = useState(false);
  return (
    <StyledMenuItem>
      <StyledItemLink
        onClick={() => setOpen((open) => !open)}
        className={`menu-toggle ${open ? "open" : ""}`}
      >
        {icon}
        <span>{title}</span>
      </StyledItemLink>
      {children}
    </StyledMenuItem>
  );
}
function MenuItem({ title, href, icon, active, isSmall }) {
  return (
    <StyledMenuItem className={active ? "active" : ""}>
      <StyledItemLink to={href} className={isSmall ? "small" : ""}>
        {icon}
        <span>{title}</span>
      </StyledItemLink>
    </StyledMenuItem>
  );
}
export default GiangVienAside;
