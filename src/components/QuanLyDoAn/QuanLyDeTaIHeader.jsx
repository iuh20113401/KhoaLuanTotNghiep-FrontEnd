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
    bgcolor: "var(--bs-warning)",
    color: "var(--bs-white)",
  },
  1: {
    content: "Đạt giữa kỳ",
    bgcolor: "var(--bs-warning)",
    color: "var(--bs-white)",
  },
  2: {
    content: "Chờ phản biện",
    bgcolor: "var(--bs-warning)",
    color: "var(--bs-white)",
  },
  3: {
    content: "Chờ chấm điểm hội động",
    bgcolor: "var(--bs-warning)",
    color: "var(--bs-white)",
  },
  4: {
    content: "Chờ chám diểm poster",
    bgcolor: "var(--bs-warning)",
    color: "var(--bs-white)",
  },
  5: {
    content: "Chờ chám diểm poster",
    bgcolor: "var(--bs-success)",
    color: "var(--bs-white)",
  },
  6: {
    content: "Cấm thi",
    bgcolor: "var(--bs-danger)",
    color: "var(--bs-white)",
  },
  7: {
    content: "Không đạt phản biện ",
    bgcolor: "var(--bs-danger)",
    color: "var(--bs-white)",
  },
  8: {
    content: "Không đạt hội đồng",
    bgcolor: "var(--bs-danger)",
    color: "var(--bs-white)",
  },
};
function QuanLyDeTaIHeader({ content, active, setActive, doAn }) {
  return (
    <Card>
      <StyledHeader>
        <StyledRow className="align-center" gap="1.6rem">
          <Avatar size="xl" src={Logo} />
          <ColLg>
            <StyledInfo>
              <h4 class="fw-bold"> {doAn?.tenDoAn}</h4>
              <StyledRow gap="1.6rem" className="align-center">
                <div>Mã đồ án: {doAn?.maDoAn}</div>
                <div class="vr"></div>
                <div>
                  Ngày tham gia :{" "}
                  <span class="fw-medium">
                    {formatVieNamDate(doAn?.ngayThamGia)}
                  </span>
                </div>
                <Badges
                  content={StyledTrangThai[doAn.trangThai].content}
                  bgcolor={StyledTrangThai[doAn.trangThai].bgcolor}
                  color={StyledTrangThai[doAn.trangThai].color}
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

export default QuanLyDeTaIHeader;
