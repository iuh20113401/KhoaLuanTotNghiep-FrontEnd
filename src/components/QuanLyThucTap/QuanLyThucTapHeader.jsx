import styled from "styled-components";
import Avatar from "../../ui/Avatar";
import { ColLg, StyledRow } from "../../ui/Row";
import Card from "../../ui/Card";
import Badges from "../../ui/Badges";
import { StyledTabHeader } from "../../ui/Tab";
import Logo from "../../../public/hinhanh/iuh_logo_1.png";
import formatVieNamDate from "../../utils/FormatDate";
const StyledHeader = styled.div`
  padding: 0.8rem 1.6rem;
  padding-bottom: 0;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;
const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  & h4 {
    margin-bottom: 0.5rem;
  }
`;
const StyledTrangThai = {
  0: {
    content: "Đang tiến hành",
    bgcolor: "bg-yellow-500",
    color: "text-white",
  },
  1: { content: "Đạt", bgcolor: "bg-green-600", color: "var(--bs-white)" },
  2: {
    content: "Không đạt",
    bgcolor: "var(--bs-danger)",
    color: "text-white",
  },
};
function QuanLyThucTapHeader({ content, active, setActive, thucTap }) {
  return (
    <Card>
      <StyledHeader>
        <StyledRow className="align-center" gap="1.6rem">
          <Avatar size="xl" src={Logo} />
          <ColLg>
            <StyledInfo>
              <h4 class="fw-bold"> {thucTap?.tenCongTy}</h4>
              <StyledRow gap="1.6rem" className="align-center">
                <div class="vr"></div>
                <div>
                  Ngày tham gia :{" "}
                  <span class="fw-medium">
                    {formatVieNamDate(thucTap?.ngayThamGia)}
                  </span>
                </div>
                <Badges
                  content={StyledTrangThai[thucTap.trangThai].content}
                  bgcolor={StyledTrangThai[thucTap.trangThai].bgcolor}
                  color={StyledTrangThai[thucTap.trangThai].color}
                />
              </StyledRow>
            </StyledInfo>
          </ColLg>
        </StyledRow>
        <StyledTabHeader>
          {content.map((ct, index) => (
            <li class="nav-item" role="presentation" key={index}>
              <button
                type="button"
                className={active === index ? "active" : ""}
                onClick={() => setActive(index)}
              >
                {ct.header}
              </button>
            </li>
          ))}
        </StyledTabHeader>
      </StyledHeader>
    </Card>
  );
}

export default QuanLyThucTapHeader;
