import { BsPerson } from "react-icons/bs";
import Card from "../../../ui/Card";
import { Col3, ColLg, StyledRow } from "../../../ui/Row";
import styled from "styled-components";

const StyledIcon = styled.span`
  width: 3rem;
  height: 3rem;
  background-color: ${(props) => props.bgcolor || "var(--bs-white)"};
  border-radius: 999%;
  display: inline-flex;
  align-items: center;
  & > svg {
    width: 3rem;
    height: 2rem;
    color: ${(props) => props.color || "var(--bs-black)"};
  }
`;

function ThongTinChung({ thongTinDashboad }) {
  return (
    <StyledRow>
      <Col3 className="pr-2 pl-2">
        <Card className="p-2">
          <StyledRow>
            <ColLg>
              <h6>Tổng sinh viên</h6>
              <h4>{thongTinDashboad?.soLuongDeTai || 0}</h4>
            </ColLg>
            <ColLg className="text-center  align-center flex justify-end">
              <StyledIcon bgcolor="var(--bs-cyan)" color="var(--bs-white)">
                <BsPerson />
              </StyledIcon>
            </ColLg>
          </StyledRow>
        </Card>
      </Col3>
      <Col3 className="pr-2 pl-2">
        <Card className="p-2">
          <h6>Số lượng đề tài</h6>{" "}
          <h4>{thongTinDashboad?.soLuongDeTai || 0}</h4>
        </Card>
      </Col3>
      <Col3 className="pr-2 pl-2">
        <Card className="p-2">
          <h6>Số lượng đồ án</h6>{" "}
          <h4>{thongTinDashboad?.soLuongSinhVienThucTap || 0}</h4>
        </Card>
      </Col3>
      <Col3 className="pr-2 pl-2">
        <Card className="p-2">
          <h6>Số lượng thực tập</h6>{" "}
          <h4>{thongTinDashboad?.soLuongSinhVienThucTap || 0}</h4>
        </Card>
      </Col3>
    </StyledRow>
  );
}

export default ThongTinChung;
