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

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
  }
`;

const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;

  h4 {
    margin-bottom: 0.5rem;
  }

  @media (max-width: 768px) {
    h4 {
      font-size: 1.25rem;
    }
  }
`;

const StyledRowResponsive = styled(StyledRow)`
  align-items: center;
  gap: 1.6rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 0.8rem;
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
    content: "Chờ chấm điểm hội đồng",
    bgcolor: "var(--bs-warning)",
    color: "var(--bs-white)",
  },
  4: {
    content: "Chờ chám điểm poster",
    bgcolor: "var(--bs-warning)",
    color: "var(--bs-white)",
  },
  5: {
    content: "Cấm thi",
    bgcolor: "var(--bs-danger)",
    color: "var(--bs-white)",
  },
  6: {
    content: "Không đạt phản biện",
    bgcolor: "var(--bs-danger)",
    color: "var(--bs-white)",
  },
  7: {
    content: "Không đạt hội đồng",
    bgcolor: "var(--bs-danger)",
    color: "var(--bs-white)",
  },
  8: {
    content: "Đạt",
    bgcolor: "var(--bs-danger)",
    color: "var(--bs-white)",
  },
};

function QuanLyDeTaiHeader({ content, active, setActive, doAn }) {
  return (
    <Card>
      <StyledHeader>
        <StyledRowResponsive gap="1.6rem">
          <Avatar size="xl" src={Logo} />
          <ColLg>
            <StyledInfo>
              <h4 className="fw-bold">{doAn?.tenDoAn}</h4>
              <StyledRowResponsive>
                <div>
                  <p>Mã đồ án: {doAn?.maDoAn}</p>
                </div>
                <div>
                  <p>
                    {" "}
                    Ngày tham gia:{" "}
                    <span className="fw-medium">
                      {formatVieNamDate(doAn?.ngayThamGia)}
                    </span>
                  </p>
                </div>
                <Badges
                  content={StyledTrangThai[doAn.trangThai].content}
                  bgcolor={StyledTrangThai[doAn.trangThai].bgcolor}
                  color={StyledTrangThai[doAn.trangThai].color}
                />
              </StyledRowResponsive>
            </StyledInfo>
          </ColLg>
        </StyledRowResponsive>
        <StyledTabHeader>
          {content.map((ct, index) => (
            <li className="nav-item" role="presentation" key={index}>
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

export default QuanLyDeTaiHeader;
